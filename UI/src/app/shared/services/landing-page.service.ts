import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { buildLandingPageSection1, buildLandingPageSection3 } from 'src/app/core/mocks/landingPageSection1.mock';
import { ILandingTicket } from 'src/app/shared/model/ILandingTicket';

import { ILandingPageRequest } from '../model/ILandingPageRequestModel';
import { IColorsThemeModel } from './../model/IColorsThemeModel';
import { ILandingPageConfig, ILandingPageModel } from './../model/ILandingPageModel';
import { BaseService } from './base.service';

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
    if (request.stage === 3) {
      return of(buildLandingPageSection3()).pipe(
        map((item) => {
          item.json = JSON.parse(item.json as string);
          return item;
        })
      );
    }

    return this.http.post<ILandingPageModel>(`${this.landingPageApi}/GetLandingPageAlt/`, request).pipe(
      map((item) => {
        if (!item) {
          return item;
        }
        item.json = JSON.parse(item.json as string);

        const tickets = (item.json as any)['tickets'];
        if (tickets) {
          tickets.forEach((t: ILandingTicket) => {
            t.icon = t.icon === 'calendar' ? 'event' : t.icon;
            t.expand = false;
            t.items = t.items.map((ti) => {
              ti.quantity = 0;
              ti.icon = ti.icon === 'ticket' ? 'confirmation_number' : ti.icon;
              return ti;
            });
          });
          (item.json as any)['tickets'] = tickets;
        }

        return item;
      })
    );
  }
}
