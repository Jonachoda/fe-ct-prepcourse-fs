function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if(Array.isArray(numeros)){
    for(var i = 0; i < numeros.length;i++){
      if(numeros[i] != i+1) return i + 1;
    }
  }
  return null;
  
}

module.exports = encontrarNumeroFaltante;