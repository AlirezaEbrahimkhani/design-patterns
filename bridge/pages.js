"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = exports.AboutPage = void 0;
const page_model_1 = require("./page.model");
class AboutPage extends page_model_1.Page {
    constructor(theme) {
        super(theme);
    }
    title() {
        return this.theme.primaryColor();
    }
    body() {
        return this.theme.accentColor();
    }
}
exports.AboutPage = AboutPage;
class HomePage extends page_model_1.Page {
    constructor(theme) {
        super(theme);
    }
    title() {
        return this.theme.primaryColor();
    }
    body() {
        return this.theme.accentColor();
    }
}
exports.HomePage = HomePage;
