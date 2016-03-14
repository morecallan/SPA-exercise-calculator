// Reference all the operation buttons
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var multBtn = document.getElementById("mult");
var divBtn = document.getElementById("div");
var output = document.getElementById("output");

// Creating event listeners
addBtn.addEventListener("click", function() {
  grabEm(addEm);
}, false)
subBtn.addEventListener("click", function() {
  grabEm(subtractEm);
}, false)
multBtn.addEventListener("click", function(){
  grabEm(multiplyEm);
}, false)
divBtn.addEventListener("click", function(){
  grabEm(divideEm);
}, false)


/*
  Grab dem inputs
 */
function grabEm(functionToDo) {
  var inputs = {};
  inputs.one = parseInt(document.getElementById("in1").value);
  inputs.two = parseInt(document.getElementById("in2").value);
  inputs.func = functionToDo;

  doDatShit(inputs.one, inputs.two, inputs.func)
}


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplyEm(num1, num2) {
  var product = num1 * num2;
  return product
}



/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function addEm(num1, num2) {
  var sum = num1 + num2;
  return sum
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractEm(num1, num2) {
  var difference = num1 - num2;
  return difference
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divideEm(num1, num2) {
  var quotient = num1 % num2;
  return quotient
}



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */



function doDatShit(num1, num2, mathToDo) {
  var value = mathToDo(num1, num2);
  console.log("value", value);
  output.innerHTML = value;
  return value
}


