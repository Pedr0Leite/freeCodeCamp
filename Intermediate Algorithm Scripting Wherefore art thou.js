//Intermediate Algorithm Scripting: Wherefore art thou

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);

  return collection.filter(function(obj){
    for(var i=0; i< keys.length; i++){
      if(!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]){
        return false;
      }
    }
      return true;
  });

  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
