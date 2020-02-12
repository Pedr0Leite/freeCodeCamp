//Basic JavaScript: Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if(startNum - endNum === 0){
    return [startNum];
  }else{
var numbers = rangeOfNumbers(startNum, endNum - 1);
numbers.push(endNum);
  return numbers;
  }

};

console.log(rangeOfNumbers(1,5));


//Basic JavaScript: Use Recursion to Create a Countdown
function countdown(myArray, n){
  if(n <= 0){
    return;
  }else{
myArray.push(n);
countdown(myArray, n-1)
  }
}
