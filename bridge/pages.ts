import { Page } from "./page.model";
import { ITheme } from "./theme.interface";

export class AboutPage extends Page {
  constructor(theme: ITheme) {
    super(theme);
  }
  title(): string {
    return this.theme.primaryColor();
  }
  body(): string {
    return this.theme.accentColor();
  }
}

export class HomePage extends Page {
  constructor(theme: ITheme) {
    super(theme);
  }
  title(): string {
    return this.theme.primaryColor();
  }
  body(): string {
    return this.theme.accentColor();
  }
}
