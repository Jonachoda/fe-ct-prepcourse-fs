function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  
  if(numero % 2 === 0){
    numero = Math.log2(numero);
    if(Math.trunc(numero) - numero === 0) {
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

module.exports = esPotenciaDeDos;
