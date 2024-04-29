//Crear una función que reciba un array de palabras y devuelva
//true si todas las palabras terminan con la letra "a" y false
//si al menos una palabra no termina con la letra "a".
//Usa el método endsWith() de string para resolverlo.

function acabanEnA(palabras) {
    return palabras.every(acabaEnA => acabaEnA.endsWith('a'));
  }

const palabras = ["casa", "perro", "gato", "mesa"];
const todasTerminan = acabanEnA(palabras);
console.log(`¿Todas las palabras terminan en "a"? ${todasTerminan}`);