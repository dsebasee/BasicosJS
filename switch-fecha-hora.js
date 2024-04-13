const diaDeLaSemana = new Date().getDay();

switch (diaDeLaSemana) {
  case 0:
    console.log("Hoy es domingo.");
    break;
  case 1:
    console.log("Hoy es lunes.");
    break;
  case 2:
    console.log("Hoy es martes.");
    break;
  case 3:
    console.log("Hoy es miércoles.");
    break;
  case 4:
    console.log("Hoy es jueves.");
    break;
  case 5:
    console.log("Hoy es viernes.");
    break;
  case 6:
    console.log("Hoy es sábado.");
    break;
  default:
    console.log("Error: El día de la semana no es válido.");
}