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

// const developers = [];

// developers.push(DeveloperFactory.create("A", 3, "front"));
// developers.push(DeveloperFactory.create("B", 12, "front"));
// developers.push(DeveloperFactory.create("C", 1, "back"));
// developers.push(DeveloperFactory.create("D", 5, "front"));
// developers.push(DeveloperFactory.create("E", 9, "back"));
// developers.push(DeveloperFactory.create("F", 7, "back"));
