function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
   var pali = true;
  for(var i = 0; i < string.length / 2; i++){
   if(string[i] != string[(string.length - i) - 1]) pali = false;
  }
  return pali;
}

module.exports = esPalindromo;