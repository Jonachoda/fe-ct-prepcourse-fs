function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var newArr = Array();
  for(var i=0; i < array.length; i++)
    newArr.unshift(array[i]);

  return newArr;

}

module.exports = invertirArray;
