function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var a = 0;
  var b = 0;
  var c = 0;
  var ta = false;
  var tb = false;
  var tc = false;
  var output = "";
  do{
    if(str1.length > 0 && a < str1.length) {
      output += str1[a];
      a++;
    } else {
      ta=true;
    }
    if(str2.length > 0 && b < str2.length) {
      output += str2[b];
      b++;
    } else {
      tb=true;
    }
    if(str3.length > 0 && c < str3.length) {
      output += str3[c];
      c++;
    } else {
      tc=true;
    }
    if(ta && tb && tc) break;
  }while(1);

  return output;
}

module.exports = combine;