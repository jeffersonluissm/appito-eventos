import { IColorsThemeModel } from './IColorsThemeModel';

export interface ILandingPageModel {
  subscriptionId: string;
  eventId: string;
  stage: number;
  stages: number[];
  json: string | ILandingPageConfig;
  message: string;
  error: boolean;
}

export interface ILandingPageConfig {
  areas: ILandingPageArea[];
  colors: IColorsThemeModel[];
}

export interface ILandingPageArea {
  type: string;
  section?: string;
  properties: any;
}
