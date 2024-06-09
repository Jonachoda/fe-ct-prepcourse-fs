function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  var vocal = ["a", "e", "i", "o", "u"];
  var verVocal = false;
  for(var i  =0; i < vocal.length; i++)  
    if(vocal[i] == letra) verVocal=true;
  return ((verVocal) ? "Es vocal":"Dato incorrecto");
}

module.exports = esVocal;
