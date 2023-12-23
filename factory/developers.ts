import { Developer } from "./developer.model";

export class FrontendDeveloper extends Developer {
  constructor(name: string, experience: string) {
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

export class BackendDeveloper extends Developer {
  constructor(name: string, experience: string) {
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
