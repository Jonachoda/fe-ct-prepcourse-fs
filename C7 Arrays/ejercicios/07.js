function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  
  for(var i=0; i < array.length; i++){
    for(var j=0; j < array.length;j++){
      if(array[j] > array[i]){
        var buffer = array[j];
        array[j] = array[i];
        array[i] = buffer;
      }        
    }
  }
  return array;
}

module.exports = ordenarArray;
