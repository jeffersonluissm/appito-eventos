import { IColorsThemeModel } from './../model/IColorsThemeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ILandingPageRequest } from '../model/ILandingPageRequestModel';
import { ILandingPageModel, ILandingPageConfig } from './../model/ILandingPageModel';
import { BaseService } from './base.service';
import { buildLandingPageSection1 } from 'src/app/core/mocks/landingPageSection1.mock';

@Injectable()
export class LandingPageService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  setColors() {
    const colorsStr = localStorage.getItem('appito-events-colors');
    if (!colorsStr) {
      return;
    }
    const colors = JSON.parse(colorsStr);
    document.documentElement.style.setProperty('--color-background-primary', colors['background-primary']);
    document.documentElement.style.setProperty('--color-background-secondary', colors['background-secondary']);
    document.documentElement.style.setProperty('--color-title', colors['title']);
    document.documentElement.style.setProperty('--color-body', colors['body']);
    document.documentElement.style.setProperty('--color-accent', colors['accent']);
  }

  getLandingPage(request: ILandingPageRequest): Observable<ILandingPageModel> {
    // return of(buildLandingPageSection1()).pipe(
    //   map((item) => {
    //     item.json = JSON.parse(item.json as string);
    //     return item;
    //   })
    // );

    return this.http.post<ILandingPageModel>(`${this.landingPageApi}/GetLandingPageAlt/`, request).pipe(
      map((item) => {
        item.json = JSON.parse(item.json as string);
        return item;
      })
    );
  }
}
