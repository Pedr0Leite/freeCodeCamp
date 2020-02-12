function convertToRoman(num) {
//Create an empty string
var finalNumber = '';
//Create an array of possible RN up to 1000
var romanNumber = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//Create an array of possible number values
var normalNumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//Iterate for a lenght of our numbers array
for(var i=0; i < normalNumber.length; i++){
//While original number is larger than our inputted
while(normalNumber[i] <=num){
//Add its equivalent roman number to our orifinal empty string
finalNumber+=romanNumber[i];
//Substract the value from original number to end while loop
num-=normalNumber[i];
}
}
 return finalNumber;
}

convertToRoman(36);


//--------------------------------
function convertToRoman(num) {
var romanToNum = {
  M: 1000,
  CD: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

var final = "";

for(var key in romanToNum){
  // console.log(key)
  // console.log(romanToNum[key]);
  while(num>=romanToNum[key]){
    final+=key;
    num-=romanToNum[key]
  }
}
return final;
}


convertToRoman(500);
