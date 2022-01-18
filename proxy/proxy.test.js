const { it, expect, describe } = require("@jest/globals");
import { Student, withReflectStudent, withoutReflectStudent } from "./proxy";

describe("Proxy pattern test", () => {
  it("should has property (student obj)", () => {
    expect(Student).not.toBeNull();
  });

  it("withoutReflect: should change the name property", () => {
    withoutReflectStudent.name = "Alireza";
    expect(withoutReflectStudent.name).toBe("Student name is Alireza");
  });

  it("withReflect: should change the name property", () => {
    withReflectStudent.name = "Alireza";
    expect(withReflectStudent.name).toBe("Student name is Alireza");
  });

  it("withReflect: should throw error while assign invalid type value", () => {
    expect(() => {
      withReflectStudent.name = 2;
    }).toThrow(TypeError);
  });

  it("withoutReflect: should throw error while assign invalid type value", () => {
    expect(() => {
      withoutReflectStudent.name = 2;
    }).toThrow(TypeError);
  });

  it("withReflect: should throw a correct error message while assign invalid type value", () => {
    expect(() => {
      withReflectStudent.name = 2;
    }).toThrow("Type of values is not the same.");
  });

  it("withoutReflect: should throw a correct error message while assign invalid type value", () => {
    expect(() => {
      withoutReflectStudent.name = 2;
    }).toThrow("Type of values is not the same.");
  });
});
