class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(callBackFn) {
    this.observers.push(callBackFn);
  }

  unSubscribe(observerCallbackFn) {
    this.observers = this.observers.filter(
      (observer) => observer != observerCallbackFn
    );
  }

  next(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export { Observable };
