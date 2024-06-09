function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  
  var output="";
  for(var i=0;i < palabras.length;i++ ) {
    output += palabras[i];
    if(i < palabras.length - 1) output += " ";
  }

  return output;
}

module.exports = dePalabrasAFrase;
