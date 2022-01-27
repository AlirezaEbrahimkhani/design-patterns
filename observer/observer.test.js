const { describe, it, expect, beforeEach } = require("@jest/globals");
import { Observable } from "./observer";

describe("Observer pattern test", () => {
  let observable;

  function callBackOneFn(data) {
    return data;
  }

  function callBackTwoFn(data) {
    return data;
  }

  beforeEach(() => {
    observable = new Observable();
  });

  it("should create observer instance truthy", () => {
    expect(observable).toBeTruthy();
  });

  it("should add call back function to observer list", () => {
    observable.subscribe(callBackOneFn);
    observable.subscribe(callBackTwoFn);

    expect(observable.observers.length).toBe(2);
  });

  it("should unSubscribe observer", () => {
    observable.subscribe(callBackOneFn);
    observable.subscribe(callBackTwoFn);

    expect(observable.observers.length).toBe(2);

    observable.unSubscribe(callBackOneFn);

    expect(observable.observers.length).toBe(1);

    observable.unSubscribe(callBackTwoFn);

    expect(observable.observers.length).toBe(0);
  });
});
