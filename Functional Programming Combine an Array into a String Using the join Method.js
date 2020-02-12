//Functional Programming: Combine an Array into a String Using the join Method

function sentensify(str) {
  // Add your code below this line

  var newArray = str.split(/\W/).join(" ");

  return newArray

  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
