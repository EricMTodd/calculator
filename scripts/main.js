const calculator = {


  // Display array
  display: "",

  // Operations
  operators: ["(", ")", "+", "-", "×", "÷"],
  leftBracket: function() {
    this.checkForMultipleOperators(this.operators[0]);
  },
  rightBracket: function() {
    this.checkForMultipleOperators(this.operators[1]);
  },
  add: function () {
    this.checkForMultipleOperators(this.operators[2]);
  },
  subtract: function () {
    this.checkForMultipleOperators(this.operators[3]);
  },
  multiply: function () {
    this.checkForMultipleOperators(this.operators[4]);
  },
  divide: function () {
    this.checkForMultipleOperators(this.operators[5]);
  },
  evaluate: function () {
    console.log(this.display);
  },

  // Values
  values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".",],
  one: function () {
    this.updateDisplay(this.values[0]);
  },
  two: function () {
    this.updateDisplay(this.values[1]);
  },
  three: function () {
    this.updateDisplay(this.values[2]);
  },
  four: function () {
    this.updateDisplay(this.values[3]);
  },
  five: function () {
    this.updateDisplay(this.values[4]);
  },
  six: function () {
    this.updateDisplay(this.values[5]);
  },
  seven: function () {
    this.updateDisplay(this.values[6]);
  },
  eight: function () {
    this.updateDisplay(this.values[7]);
  },
  nine: function () {
    this.updateDisplay(this.values[8]);
  },
  zero: function () {
    this.updateDisplay(this.values[9]);
  },
  decimal: function () {
    this.checkForMultipleDecimals(this.values[10]);
  },

  // Other methods
  clear: function () {
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  },
  updateDisplay: function (value) {
    this.display = this.display + value;
    document.getElementById("display").innerHTML = this.display;
  },
  checkForMultipleOperators: function (value) {
    const last = this.display[this.display.length - 1];
    if (last == "+" || last == "-" || last == "×" || last == "÷" || last == ".") {
      alert("You cannot have multiple adjacent operators!");
    } else {
      this.updateDisplay(value);
    }
  },
  checkForMultipleDecimals: function (value) {
    const last = this.display[this.display.length - 1];
    if (last == ".") {
      alert("You cannot have multiple adjacent decimals!");
    } else {
      this.updateDisplay(value);
    }
  },
};