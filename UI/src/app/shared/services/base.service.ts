import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
  // TODO: PRODUCTION CONFIGURATION HERE
  protected landingPageApi: string = environment.landingPageAPI;

  protected extractData(response: any) {
    return response.data || {};
  }

  protected config() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'br',
      },
    };
  }

  protected serviceError(response: Response | any) {
    const customError: string[] = [];

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Ocorreu um erro desconhecido');
        response.error.errors = customError;
      }
    }
  }
}
