const radio = Number(prompt("Ingrese el radio del circulo: "));

let area = Math.PI * Math.pow(radio, 2);12
area = area.toFixed(2);
console.log('El area del circulo es de ', area);