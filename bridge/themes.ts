import { ITheme } from "./theme.interface";

export class LightTheme implements ITheme {
  primaryColor(): string {
    return "#pLight";
  }
  accentColor(): string {
    return "#aLight";
  }
  warningColor(): string {
    return "#wLight";
  }
}

export class DarkTheme implements ITheme {
  primaryColor(): string {
    return "#pDark";
  }
  accentColor(): string {
    return "#aDark";
  }
  warningColor(): string {
    return "#wDark";
  }
}
