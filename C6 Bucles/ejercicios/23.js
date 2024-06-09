function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  

  if(numero > 4){
    var verificar = false;
    for( var i = 2; i <  numero / 2; i++) if(numero != i && numero % i === 0) verificar = true;
    return !verificar;
  }else{
    return (numero == 4) ? false:true;
  }
}

module.exports = esNumeroPrimo;
