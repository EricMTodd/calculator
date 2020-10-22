const calculator = {
  display: [1, 2, 3, 4],
  sum: function(display) {
    let sum = 0;
    for (let i = 0; i < display.length; i++) {
      sum += display[i];
    };
    console.log(sum);
  },
};
