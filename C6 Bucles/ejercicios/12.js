function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var salida = false;
  if(num % 3 === 0) salida = "fizz";
  if(num % 5 === 0) salida = (!salida) ? "buzz": salida + "buzz";
  return salida;
}

module.exports = fizzBuzz;
