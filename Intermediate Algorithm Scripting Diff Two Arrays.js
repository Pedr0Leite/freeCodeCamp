//Intermediate Algorithm Scripting: Diff Two Arrays
//Intermediate solution
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2).filter(value => !arr1.includes(value) || !arr2.includes(value));
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//Basic solution
function diffArray(arr1, arr2){
  var newArr = [];

  function onlyOne(first, second){
    for(var i =0; i < first.length; i++){
      if(second.indexOf(first[i]) === -1){
        newArr.push(first[i]);
      }
    }
  }
  onlyOne(arr1,arr2);
  onlyOne(arr2,arr1);

  return newArr;
}
