function myDisplayer(something) {
  console.log(something);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  // add a callback method to call myDisplayer method and pass sum as parameter
  //myCallback(sum);
}

myCalculator(5, 120, myDisplayer);
