//Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
var args = Array.prototype.slice.call(arguments);

for(var i = 0; i < arr.length; i++){
  for(var j=0; j<args.length; j++){
    if(arr[i] === args[j]){
      delete arr[i];
    }
  }
}

  return arr.filter(Boolean);
}





destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53)
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
