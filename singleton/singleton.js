let counterInstance;
class Counter {
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

module.exports = Counter;
