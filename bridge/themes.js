"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkTheme = exports.LightTheme = void 0;
class LightTheme {
    primaryColor() {
        return "#pLight";
    }
    accentColor() {
        return "#aLight";
    }
    warningColor() {
        return "#wLight";
    }
}
exports.LightTheme = LightTheme;
class DarkTheme {
    primaryColor() {
        return "#pDark";
    }
    accentColor() {
        return "#aDark";
    }
    warningColor() {
        return "#wDark";
    }
}
exports.DarkTheme = DarkTheme;
