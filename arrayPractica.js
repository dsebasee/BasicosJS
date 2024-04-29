//Dada una lista de números, escribe una función en JavaScript
//que devuelva la suma de todos los números pares en la lista.
//La función deberá iterar sobre cada número en la lista, comprobar
//si el número es par y, si es así, añadirlo a la suma total. Usa
//el bucle que quieras para solucionarlo.

const numeros = [10, 2, 33, 35, 5, 4, 8, 0, 14];


function sumarPares(numeros){
    let suma=0
    numeros.forEach((numeroPar)=>{
        if(numeroPar%2==0){
            suma += numeroPar
        }
    })
    return suma
}

const suma = sumarPares(numeros);
console.log(`La suma de los números pares en la lista es: ${suma}`); 

