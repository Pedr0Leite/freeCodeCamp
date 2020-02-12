// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  // for(var i = 0; i < arr.length; i++){
  //   if(arr[i] === false || arr[i]=== null || arr[i]=== "" || arr[i]===undefined || arr[i]=== NaN){
  //     arr.splice(i,1);
  //     i--;
  //   }
  // }
  // return arr;

  //The code above just didn't removed the "NaN", but is a awesome way to go through an array and check a condition for each element
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
