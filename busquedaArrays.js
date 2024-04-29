
const emojis = ['✨', '🥑', '😍']

// indexOf
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon)

//includes
const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon)

//some
const poseeCorazon = emojis.some(emoji => emoji === '😍')
console.log(poseeCorazon)

//every
// Ejemplo: ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos)

/////////////////////////////////////////////////////////////////////

const numbers = [13, 27, 44, -10, 81]

//find
const firstNegativeNumber = numbers.find(number => number < 0)
console.log(firstNegativeNumber)

//findIndex
// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)
console.log(firstNegativeNumberIndex)
// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex])


