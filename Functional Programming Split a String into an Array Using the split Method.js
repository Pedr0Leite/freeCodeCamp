//Functional Programming: Split a String into an Array Using the split Method

function splitify(str) {
  // Add your code below this line

  var newString = str.split(/\W/); //regex \W any non-word characters
  return newString;
  // Add your code above this line
}


splitify("Hello World,I-am code");
