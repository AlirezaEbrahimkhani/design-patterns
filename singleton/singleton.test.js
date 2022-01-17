const { it, expect, describe } = require("@jest/globals");
const Counter = require("./singleton");

describe("Singleton pattern test", () => {
  let counterInstance = new Counter();

  it("should throw error while creating instance", () => {
    expect(() => {
      counterInstance = new Counter();
    }).toThrow(Error);
  });

  it("should throw a correct error message while creating instance", () => {
    expect(() => {
      counterInstance = new Counter();
    }).toThrow("You can instantiate this class only once ...!");
  });

  it("should return current counter with value of 0", () => {
    expect(counterInstance.counter).toBe(0);
  });

  it("should return current counter with value of 1 when call increment method 1 time", () => {
    counterInstance.increment();
    expect(counterInstance.counter).toBe(1);
  });

  it("should return current counter with value of 4 when call increment method 3 times", () => {
    counterInstance.increment();
    counterInstance.increment();
    counterInstance.increment();
    expect(counterInstance.counter).toBe(4);
  });

  it("should return current counter with value of 3 when call increment method 1 times and decrement 2 times", () => {
    counterInstance.increment();
    counterInstance.decrement();
    counterInstance.decrement();
    expect(counterInstance.counter).toBe(3);
  });

  it("should return true when checking type", () => {
    expect(counterInstance.getInstance() instanceof Counter).toBeTruthy();
  });
});
