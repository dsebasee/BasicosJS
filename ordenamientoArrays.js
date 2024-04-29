//Recibes una lista de números. Debes ordenar los números
//de menor a mayor según su valor absoluto. Eso quiere decir
//que los números negativos pierden el signo y se ordenan como
//si fueran positivos.
//Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.

const numbers = [5, -10, -2, -25, -7];

function sortAbsoluteNumbers(numbers) {
    return numbers.sort((a,b)=> Math.abs(a) - Math.abs(b))
}
const numerosOrdenados = sortAbsoluteNumbers(numbers);
console.log(numerosOrdenados)