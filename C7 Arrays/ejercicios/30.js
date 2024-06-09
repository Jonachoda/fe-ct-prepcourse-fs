function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var buffer=Array();
  for(var i = 0; i < numeros.length; i++){
    if(buffer.length > 0){
      var encontrado = false;
      for(var j=0;j < buffer.length; j++){
        if(numeros[i] === buffer[j]) {
          return numeros[i];
          encontrado = true;
        }
      }
      if(!encontrado) {
        buffer.push(numeros[i]);
      }
    } else {
      buffer.push(numeros[i]);
    }
  }
}

module.exports = encontrarElementoRepetido;