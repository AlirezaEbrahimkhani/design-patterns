class Developer {
  constructor() {
    if (new.target === Developer) {
      throw Error("This is class is abstract ...!");
    }
  }

  getInfo() {
    throw Error("This method is abstract and you have to implement that ...!");
  }
}

class FrontendDeveloper extends Developer {
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

class BackendDeveloper extends Developer {
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

class DeveloperFactory {
  static create(name, experience, type) {
    switch (type) {
      case "front":
        return new FrontendDeveloper(name, experience);
      case "back":
        return new BackendDeveloper(name, experience);
      default:
        throw Error("Invalid type");
    }
  }
}

export { DeveloperFactory, Developer };
