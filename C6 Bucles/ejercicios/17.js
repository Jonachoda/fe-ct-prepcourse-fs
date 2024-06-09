function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  var salida = false;
  switch(color){
    case "blue": salida = true;
                 break;
    case "red": salida = true;
                 break;
    case "green": salida = true;
                 break;
    case "orange": salida = true;
                 break;
  }

  return (!salida) ? "Color not found": "This is "+color;
}

module.exports = colors;
