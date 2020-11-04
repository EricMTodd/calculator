const calculator = {
  // Display array
  display: "",

  // Operations
  add: function() {
    this.display = this.display + "+";
    this.updateDisplay();
  },
  subtract: function() {
    this.display = this.display + "-";
    this.updateDisplay();
  },
  divide: function() {
    this.display = this.display + "÷";
    this.updateDisplay();
  },
  multiply: function() {
    this.display = this.display + "×";
    this.updateDisplay();
  },
  evaluate: function() {
    console.log("EVALUATE");
  },

  // Values
  one: function() {
    this.display = this.display + "1";
    this.updateDisplay();
  },
  two: function() {
    this.display = this.display + "2";
    this.updateDisplay();
  },
  three: function() {
    this.display = this.display + "3";
    this.updateDisplay();
  },
  four: function() {
    this.display = this.display + "4";
    this.updateDisplay();
  },
  five: function() {
    this.display = this.display + "5";
    this.updateDisplay();
  },
  six: function() {
    this.display = this.display + "6";
    this.updateDisplay();
  },
  seven: function() {
    this.display = this.display + "7";
    this.updateDisplay();
  },
  eight: function() {
    this.display = this.display + "8";
    this.updateDisplay();
  },
  nine: function() {
    this.display = this.display + "9";
    this.updateDisplay();
  },
  zero: function() {
    this.display = this.display + "0";
    this.updateDisplay();
  },
  decimal: function() {
    this.display = this.display + ".";
    this.updateDisplay();
  },

  // Other methods
  updateDisplay: function() {
    document.getElementById("display").innerHTML = this.display;
  },
  clear: function() {
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  }
};