"use strict";
class Observable {
    observers;
    constructor() {
        this.observers = [];
    }
    subscribe(callBackFn) {
        this.observers.push(callBackFn);
    }
    unSubscribe(observerCallbackFn) {
        this.observers = this.observers.filter((observer) => observer != observerCallbackFn);
    }
    next(data) {
        this.observers.forEach((observer) => observer(data));
    }
}
const obs = new Observable();
obs.subscribe(console.log);
obs.next(1);
obs.next(2);
