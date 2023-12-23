"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const developers_1 = require("./developers");
class DeveloperFactory {
    static create(name, experience, type) {
        switch (type) {
            case "front":
                return new developers_1.FrontendDeveloper(name, experience);
            case "back":
                return new developers_1.BackendDeveloper(name, experience);
            default:
                throw Error("Invalid type");
        }
    }
}
console.log(DeveloperFactory.create("Alireza", "Ebrahimkhani", "front"));
