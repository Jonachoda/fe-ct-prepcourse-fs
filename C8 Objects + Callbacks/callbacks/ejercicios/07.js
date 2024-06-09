function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var palabra;
   var retorno = Array();
   for(var i = 0; i < arrayOfStrings.length; i++){
      palabra = arrayOfStrings[i];
      if("a" === palabra[0]) retorno.push(palabra);
   }
   return retorno;
}

module.exports = filter;
