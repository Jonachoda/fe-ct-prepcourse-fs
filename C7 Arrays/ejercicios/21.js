function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  
  var output = Array();
  var enero = false;
  var marzo = false;
  var noviembre = false;
  
  for(var i=0; i < array.length; i++){
    if(array[i] === "Enero"){
      output.push(array[i]);
      enero = true;
    }
    if(array[i] === "Marzo"){
      output.push(array[i]);
      marzo = true;
    }
    if(array[i] === "Noviembre"){
      output.push(array[i]);
      noviembre = true;
    }
  } 
  
  if( enero && marzo && noviembre){
    return output;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
