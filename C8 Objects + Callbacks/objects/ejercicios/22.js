function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var suma = 0;
   for(var i= 0; i < str1.length; i++){
      var medio = false;
      for(var j = 0; j < str2.length; j++){
         if(str1[i].toLowerCase() === str2[j].toLowerCase()) medio = true;
      }
      if(medio) suma++;
   }
   return (suma === str1.length && suma === str2.length);
}

module.exports = esAnagrama;
