function suma(n){
    if(n===1){
        return 1
    } else {
        return n + suma(n-1)
    }
}

console.log(suma(3))