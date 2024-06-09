function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var buffer = "";
  for(var i = texto.length - 1; i >= 0; i--) buffer += texto[i];

  return buffer;
}

module.exports = invertirTexto;
