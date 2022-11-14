// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_URL = 'http://34.172.119.177/';
const API_URL_MANAGER = 'http://40.89.253.171/';

export const environment = {
  production: false,
  landingPageAPI: `${API_URL}appito-landingpage/api/LandingPage`,
  bookingAPI: `${API_URL_MANAGER}ms-booking/api/booking`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import `zone.js/dist/zone-error`;  // Included with Angular CLI.
