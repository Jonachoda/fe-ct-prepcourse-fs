/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var salida = Array();
  var valores = Object.keys(objeto);
  for(var i = 0; i < valores.length; i++){
    var buffer = Array();
    buffer.push(valores[i]);
    buffer.push(objeto[valores[i]]);
    salida.push(buffer);
  }
  return salida;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var salida={};
  var letra = string[0];
  for(var i=0; i < string.length; i++){
    if(Object.hasOwn(salida,string[i])) {
       salida[string[i]] += 1;
       encontrado = true;
    } else {
       salida[string[i]] = 1;
    }
  }
  return salida;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var upper="";
  var lower="";
  for(var i = 0; i< string.length; i++){
    if(string[i] == string[i].toUpperCase()){
      upper += string[i];
    }else{
      lower += string[i];
    }
  }
  return upper+lower;

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var palabras = frase.split(" ");
  var salida = "";
  for(var i = 0; i < palabras.length; i++){
    palabra = palabras[i];
    for(var j=0; j < palabra.length; j++){
      salida += palabra[palabra.length - j - 1];
    }
    if(i < palabras.length - 1) salida += " ";
  }
  return salida;

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numeros = numero.toString().split('');
  var salida = 0;
  for(var i=0; i < numeros.length / 2; i++){
    if(numeros[i] != numeros[numeros.length - i - 1]) salida++; 
  }
  if(salida === 0){
    return "Es capicua";
  } else {
    return "No es capicua";
  }

}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var separa = ['a','b','c'];
  var entrada = string;  
  var salida = "";
  for(var i=0; i < separa.length; i++){
    salida = "";
    entrada = entrada.split(separa[i]);
    for(var j = 0; j < entrada.length; j++) salida += entrada[j];
    entrada=salida;
  }
  return salida;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  //var salida = arrayOfStrings;
  var i=0;
  for(var i = 0; i < arrayOfStrings.length; i++){
    for(var j = i; j < arrayOfStrings.length; j++){
      if(arrayOfStrings[i].length > arrayOfStrings[j].length){
        var buffer = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[j];
        arrayOfStrings[j]=buffer;
      }
    }
  }
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var salida = Array();
  for(var i = 0; i < array1.length; i++){
    for(var j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]) salida.push(array1[i]);
    }
  }
  return salida;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
