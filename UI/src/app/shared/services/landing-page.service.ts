import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILandingTicket } from 'src/app/shared/model/ILandingTicket';

import { IAddress } from '../model/IAddress';
import { ICustomer } from '../model/ICustomer';
import { ILandingPageRequest } from '../model/ILandingPageRequestModel';
import { IRegisterDraw } from '../model/IRegisterDraw';
import { ITicket } from '../model/ITicket';
import { ITicketValidation } from '../model/ITicketValidation';
import { ILandingPageModel } from './../model/ILandingPageModel';
import { BaseService } from './base.service';

@Injectable()
export class LandingPageService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  setColors() {
    const colorsStr = sessionStorage.getItem('appito-events-colors');
    if (!colorsStr) {
      return;
    }
    const colors = JSON.parse(colorsStr);
    document.documentElement.style.setProperty('--color-background-primary', colors['background-primary']);
    document.documentElement.style.setProperty('--color-background-secondary', colors['background-secondary']);
    document.documentElement.style.setProperty('--color-title', colors['title']);
    document.documentElement.style.setProperty('--color-subtitle', colors['subtitle']);
    document.documentElement.style.setProperty('--color-body', colors['body']);
    document.documentElement.style.setProperty('--color-accent', colors['accent']);
    document.documentElement.style.setProperty('--color-navigation', colors['navigation']);
    document.documentElement.style.setProperty('--color-on-button', colors['on-button']);
  }

  getLandingPage(request: ILandingPageRequest): Observable<ILandingPageModel> {
    return this.http.post<ILandingPageModel>(`${this.landingPageApi}/GetLandingPageAlt/`, request).pipe(
      map((item) => {
        if (!item) {
          return item;
        }
        item.json = JSON.parse(item.json as string);
        console.log(item.json);

        if (item.json) {
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
        }

        return item;
      })
    );
  }

  getControlsAddress() {
    return [
      { type: 'T', properties: { label: 'CEP', key: 'zipcode', id: '', size: '50', mask: 'CEP', required: true } },
      { type: 'T', properties: { label: 'Endereço', key: 'address', id: '', size: '20', mask: '', required: true } },
      { type: 'T', properties: { label: 'Número', key: 'addressNumber', id: '', size: '10', required: true } },
      { type: 'T', properties: { label: 'Complemento', key: 'complement', id: '', size: '10', required: false } },
      { type: 'T', properties: { label: 'Bairro', key: 'neighborhood', id: '', size: '10', required: true } },
      { type: 'T', properties: { label: 'Cidade', key: 'city', id: '', size: '10', required: true } },
      { type: 'T', properties: { label: 'Estado', key: 'state', id: '', size: '10', required: true } },
    ];
  }

  getAddress(zipcode: string) {
    return this.http.get<IAddress>(`${this.bookingApi}/GetZipcode/${zipcode}`);
  }

  getCache(): ICustomer | undefined {
    const jsonStr = sessionStorage.getItem('appito-events-data');
    if (!jsonStr) {
      return;
    }
    return JSON.parse(jsonStr) as ICustomer;
  }

  saveCache(json: any) {
    if (!json) {
      return;
    }
    const jsonStr = JSON.stringify(json);
    sessionStorage.setItem('appito-events-data', jsonStr);
  }

  resetCache() {
    sessionStorage.removeItem('appito-events-data');
    sessionStorage.removeItem('appito-events-data-concurso');
  }

  postRegisterCustomer<IRegisterCustomerResponse>(customer: ICustomer) {
    return this.http.post<IRegisterCustomerResponse>(`${this.landingPageApi}/RegisterCustomer/`, customer);
  }

  checkDocument(documentNumber: string): Observable<ITicket> {
    return this.http.post<ITicket>(`${this.landingPageApi}/CheckDocument/`, { documentNumber });
  }

  generateTicket(documentNumber: string): Observable<{ content: string }> {
    return this.http.post<{ content: string }>(`${this.landingPageApi}/GenerateTicket/`, { documentNumber });
  }

  verifyTicket(ticketNumber: string): Observable<ITicketValidation> {
    return this.http.get<ITicketValidation>(`${this.landingPageApi}/VerifyTicket/${ticketNumber}`);
  }

  registerToDraw(data: IRegisterDraw): Observable<any> {
    return this.http.post<any>(`${this.landingPageApi}/RegisterToDraw/`, data);
  }
}
