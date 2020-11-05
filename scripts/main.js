const calculator = {
  // Display array
  display: "",

  // Operations
  add: function() {
    const value = "+";
    this.checkForMultipleOperators(value);
  },
  subtract: function() {
    const value = "-";
    this.checkForMultipleOperators(value);
  },
  multiply: function() {
    const value = "×";
    this.checkForMultipleOperators(value);
  },
  divide: function() {
    const value = "÷";
    this.checkForMultipleOperators(value);
  },
  evaluate: function() {
    console.log("EVALUATE");
  },

  // Values
  one: function() {
    const value = "1";
    this.updateDisplay(value);
  },
  two: function() {
    const value = "2";
    this.updateDisplay(value);
  },
  three: function() {
    const value = "3";
    this.updateDisplay(value);
  },
  four: function() {
    const value = "4";
    this.updateDisplay(value);
  },
  five: function() {
    const value = "5";
    this.updateDisplay(value);
  },
  six: function() {
    const value = "6";
    this.updateDisplay(value);
  },
  seven: function() {
    const value = "7";
    this.updateDisplay(value);
  },
  eight: function() {
    const value = "8";
    this.updateDisplay(value);
  },
  nine: function() {
    const value = "9";
    this.updateDisplay(value);
  },
  zero: function() {
    const value = "0";
    this.updateDisplay(value);
  },
  decimal: function() {
    const value = ".";
  },

  // Other methods
  updateDisplay: function(value) {
    this.display = this.display + value;
    document.getElementById("display").innerHTML = this.display;
  },
  clear: function() {
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  },
  checkForMultipleOperators: function(value) {
    const last = this.display[this.display.length - 1];
    if (last == "+" || last == "-" || last == "×" || last == "÷") {
      alert("You cannot have multiple adjacent operators!");
    } else {
      this.updateDisplay(value);
    }
  },
};