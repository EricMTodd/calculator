const calculator = {
  // Display array
  display: [],

  // Operations
  sum: function() {
    console.log("SUM");
  },
  difference: function() {
    console.log("DIFFERENCE");
  },
  product: function() {
    console.log("PRODUCT");
  },
  quotient: function() {
    console.log("QUOTIENT");
  },
  evaluate: function() {
    console.log("EVALUATE");
  },

  // Values
  one: function() {
    this.display.push(1)
    this.updateDisplay();
  },
  two: function() {
    this.display.push(2)
    this.updateDisplay();
  },
  three: function() {
    this.display.push(3)
    this.updateDisplay();
  },
  four: function() {
    this.display.push(4)
    this.updateDisplay();
  },
  five: function() {
    this.display.push(5)
    this.updateDisplay();
  },
  six: function() {
    this.display.push(6)
    this.updateDisplay();
  },
  seven: function() {
    this.display.push(7)
    this.updateDisplay();
  },
  eight: function() {
    this.display.push(8)
    this.updateDisplay();
  },
  nine: function() {
    this.display.push(9)
    this.updateDisplay();
  },
  zero: function() {
    this.display.push(0)
    this.updateDisplay();
  },
  decimal: function() {
    console.log(".")
  },

  // Other methods
  updateDisplay: function() {
    document.getElementById("display").innerHTML = this.display;
  }
};