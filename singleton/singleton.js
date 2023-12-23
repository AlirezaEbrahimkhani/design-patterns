"use strict";
let counterInstance;
class Counter {
    counter;
    constructor() {
        if (counterInstance) {
            throw new Error("You can instantiate this class only once ...!");
        }
        this.counter = 0;
        counterInstance = this;
    }
    increment() {
        ++this.counter;
    }
    decrement() {
        --this.counter;
    }
    getInstance() {
        return this;
    }
}
const instance1 = new Counter();
const instance2 = new Counter();
