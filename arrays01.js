//En un restaurante se reciben pedidos de comida a domicilio.
//Vamos a escribir una función procesarPedido que recibe un pedido,
//que es un array de platos. Lo que debemos hacer es:
//A) El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//B) Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
//C) Después añadimos al final del array el nombre del usuario que sacamos antes.

function procesarPedido(pedidos){
    const nombreCliente = pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push(numbreCliente);
    return pedidos;
}