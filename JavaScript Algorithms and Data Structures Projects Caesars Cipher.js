function rot13(str) { // LBH QVQ VG!
var str_split = str.split("");
var decoded_str = str_split.map(function(x){
var letter = x.charCodeAt(0);
switch(letter){
case letter <= 77:
String.fromCharCode(letter+13);
break;
case letter == 78:
String.fromCharCode(letter-13);
break;
case letter > 78:
String.fromCharCode(letter);
break;
   }
return letter;
})
var final_str = decoded_str.join();
return final_str;
}

// Change the inputs below to test
//rot13("SERR PBQR PNZC");
String.fromCharCode(83);

// console.log("A".charCodeAt(0));
// console.log("D".charCodeAt(0));
// console.log("N".charCodeAt(0));
// console.log("P".charCodeAt(0));
// console.log("Z".charCodeAt(0));

// console.log(String.fromCharCode(("A".charCodeAt(0))+13));
// console.log(String.fromCharCode(68+13));
// console.log(String.fromCharCode(78-13));
// console.log(String.fromCharCode(80-13));
// console.log(String.fromCharCode(90-13));

//"ASD ASF GG".split("");



function rot13(str) { // LBH QVQ VG!
var str_split = str.split("");
var decoded_str = str_split.map(function(x){
var letter = x.charCodeAt(0);
var newStr = "";
    if(letter < 65 || letter > 90){
    newStr += String.fromCharCode(letter);
  }else if(letter < 78){
    newStr += String.fromCharCode(letter+13);
  }else{
    newStr += String.fromCharCode(letter-13)
}
  return newStr;
})
var final_str = decoded_str.join("");
return final_str;
}



rot13("SERR CVMMN!")


//Other possibilities
function rot13(str) { // LBH QVQ VG!

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
  let newStr = ''

  for (const letter of str) {
    alphabet.charAt(cipher.indexOf(letter)) != '' ?
    newStr += alphabet.charAt(cipher.indexOf(letter)) : newStr += letter
  }
  return newStr
}
