//Functional Programming: Implement map on a Prototype
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

//Option 1 - for()
for(var i =0; i<this.lenght; i++){
  if(callback(this[i])==true){
    newArray.push(this[i]);
  }
}
//Option 2 forEach()
this.forEach(function(x){
  if(callback(x) == true){
    newArray.push(x)
  }
})

  // Add your code above this line
  return newArray;
};
var new_s = s.myMap(function(item){
  return item * 2;
});
