import { AboutPage, HomePage } from "./pages";
import { DarkTheme, LightTheme } from "./themes";

const lightTheme = new LightTheme();
const darkTheme = new DarkTheme();

const aboutPage = new AboutPage(lightTheme);
const homePage = new HomePage(darkTheme);

console.log(aboutPage.title());
console.log(aboutPage.body());

console.log(homePage.title());
console.log(homePage.body());
