let NUMERO_1 = prompt ("Ingrese el numero 1: ")
let NUMERO_2 = prompt ("Ingrese el numero 1: ")

let resto = NUMERO_1 - NUMERO_2
if(resto > 0){
    console.log("es mayor a 0")

    if(resto%2==0){
        console.log("Es par")
    }else{
        console.log("Es impar")
    }
}else{
    console.log("es menor o igual a 0")
}