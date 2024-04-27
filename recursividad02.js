// Fibonacci
function Fibo(n){
    if(n<=1){
        return n
    } else {
        return Fibo(n-1) + Fibo(n-2)
    }
}
console.log(Fibo(6))