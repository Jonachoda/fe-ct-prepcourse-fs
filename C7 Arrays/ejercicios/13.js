function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var newArray = Array();
  for(var i=0; i < array.length ; i++){
    if(array[i] % 2 === 0) newArray.push(array[i]);
  }
  return newArray;
}

module.exports = filtrarNumerosPares;
