class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    this.value /= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}

console.log(
    new Calculator()
        .add(10)
        .subtract(2)
        .multiply(3)
        .divide(4)
        .getResult()
);