class Observable {
  observers: any[];
  constructor() {
    this.observers = [];
  }

  subscribe(callBackFn: () => any) {
    this.observers.push(callBackFn);
  }

  unSubscribe(observerCallbackFn: () => any) {
    this.observers = this.observers.filter(
      (observer) => observer != observerCallbackFn
    );
  }

  next(data: any) {
    this.observers.forEach((observer) => observer(data));
  }
}

const obs = new Observable();
obs.subscribe(console.log);
obs.next(1);
obs.next(2);
