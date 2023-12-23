import { ITheme } from "./theme.interface";

export abstract class Page {
  theme: ITheme;
  constructor(theme: ITheme) {
    this.theme = theme;
  }
  abstract title(): string; // HTML content
  abstract body(): string; // HTML content
}
