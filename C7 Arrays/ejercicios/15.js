function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var maximo = array[0];
  var indexMax = 0;
  for( var i=0; i < array.length; i++) 
    if(array[i] > maximo) {
      maximo = array[i];
      indexMax = i;
    }

  return indexMax;
}

module.exports = encontrarIndiceMayor;
