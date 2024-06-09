function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if(array.length > 0) {
      var random_A;
      if(array.length < 2){
         random_A = 0;
      } else {
         random_A= Math.floor(Math.random() * array.length);
      }
      return array[random_A];
   } else {
      return undefined;
   }
}

module.exports = obtenerElementoAleatorio;
