const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  var pro = propiedad;
  objeto[pro] = valor;
  return objeto;
};

module.exports = agregarNuevaPropiedad;
