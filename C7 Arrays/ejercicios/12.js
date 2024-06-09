function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var output = Array();
  for(var i=0; i < array.length; i++){
    output.push(array[i].toUpperCase());
  }
  return output;
}

module.exports = convertirStringAMayusculas;
