"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendDeveloper = exports.FrontendDeveloper = void 0;
const developer_model_1 = require("./developer.model");
class FrontendDeveloper extends developer_model_1.Developer {
    constructor(name, experience) {
        super();
        this.name = name;
        this.experience = experience;
    }
    getInfo() {
        return {
            name: this.name,
            experience: this.experience,
            role: "Front end",
        };
    }
}
exports.FrontendDeveloper = FrontendDeveloper;
class BackendDeveloper extends developer_model_1.Developer {
    constructor(name, experience) {
        super();
        this.name = name;
        this.experience = experience;
    }
    getInfo() {
        return {
            name: this.name,
            experience: this.experience,
            role: "Back end",
        };
    }
}
exports.BackendDeveloper = BackendDeveloper;
