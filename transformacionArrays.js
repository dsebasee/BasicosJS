
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

//filter

// Ejemplo:Quedarnos con todas las cadenas de texto que tengan la letra a
// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))
console.log(stringsWithA)

//map
// Ejemplo: crear un array con la longitud de cada cadena de texto de un array de cadenas.
const stringsLength = strings.map((string) => string.length)
console.log(stringsLength) 

///////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5, 6, 7]

//map + filter
//Ejemplo: filtrar los números pares y luego multiplicarlos por 2.

const doubleEvenNumbers = numbers
  .filter(number => number % 2 === 0) // [2, 4, 6]
  .map(number => number * 2) // [4, 8, 12]
console.log(doubleEvenNumbers) // [4, 8, 12]

//reduce
//Ejemplo: sumar todos los elementos de un Array.

const sum = numbers.reduce((accumulator, currentNumber) => {
return accumulator + currentNumber}, 0) // <- el 0 es el valor inicial
console.log(sum)

