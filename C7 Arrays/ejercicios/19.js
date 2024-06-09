function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var producto_arg=0;
  if(arguments.length > 0){
    producto_arg = 1;
    for(var i=0; i<arguments.length;i++){
      producto_arg *= arguments[i];
    }
  }
  return producto_arg;

}

module.exports = multiplicarArgumentos;
