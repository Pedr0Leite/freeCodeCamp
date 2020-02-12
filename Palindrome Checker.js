//JavaScript Algorithms and Data Structures Projects: Palindrome Checker


function palindrome(str) {
  //first we do the regex, search all non-word char plus the underscore
var regex = /[\W_]/g;
  //We lower all cases and make it a string
var first = str.toLowerCase().replace(regex,"");
  //We reverse the str
function reverse(first){
  return [...first].reverse().join("");
}

var second = reverse(first);
  //last, we match if they are equal
if(first == second){
  return true
}
return false
}
