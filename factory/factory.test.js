const { describe, it, expect, beforeEach } = require("@jest/globals");
import { DeveloperFactory, Developer } from "./factory";

describe("factory pattern", () => {
  it("should throw error while creating instance", () => {
    expect(() => {
      new Developer();
    }).toThrow(Error);
  });

  it("should create a correct instance of Frontend Developer", () => {
    let frontendDeveloper = DeveloperFactory.create("Alireza", 4, "front");
    expect(frontendDeveloper.getInfo().role).toBe("Front end");
  });

  it("should create a correct instance of Backend Developer", () => {
    let frontendDeveloper = DeveloperFactory.create("Alireza", 4, "back");
    expect(frontendDeveloper.getInfo().role).toBe("Back end");
  });

  it("should throw an error while create invalid type developer", () => {
    expect(() => {
      DeveloperFactory.create("Alireza", 4, "android");
    }).toThrow(Error);
  });

  it("should throw correct error message while create invalid type developer", () => {
    expect(() => {
      DeveloperFactory.create("Alireza", 4, "android");
    }).toThrow("Invalid type");
  });
});
