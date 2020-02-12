//Intermediate Algorithm Scripting: Sum All Numbers in a Range

function sumAll(arr) {
  var maximo = Math.max(arr[0], arr[1]);
  var minimo = Math.min(arr[0], arr[1]);
  var total = 0;

  for(var i = minimo; i <= maximo; i++){
    total += i;
  }

  return total;
}

sumAll([1, 4]);
