import { BackendDeveloper, FrontendDeveloper } from "./developers";

type SEType = "front" | "back";

class DeveloperFactory {
  static create(name: string, experience: string, type: SEType) {
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

console.log(DeveloperFactory.create("Alireza", "Ebrahimkhani", "front"));
