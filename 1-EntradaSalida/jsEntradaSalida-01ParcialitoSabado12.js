/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
Ruben Dario Zevallos Lambrescht
División K
parcialito sabado parte 1
Ejercicio 1 Entrada Salida
*/
function mostrar() {
	let producto1;
	let producto2;
	let producto3;
	let precio1;
	let precio2;
	let precio3;
	let descuento;
	let promedio;
	let precioBruto;
	let precioConDescuento;
	let precioFinal;
	let impuesto = 21;

	producto1 = prompt("Ingrese el primer producto: ");
	precio1 = prompt("Ingrese el primer precio: ");
	precio1 = parseFloat(precio1);
	producto2 = prompt("Ingrese el segundo producto: ");
	precio2 = prompt("Ingrese el segundo precio: ");
	precio2 = parseFloat(precio2);
	producto3 = prompt("Ingrese el tercer producto: ");
	precio3 = prompt("Ingrese el tercer precio: ");
	precio3 = parseFloat(precio3);
	descuento = parseInt(prompt("Ingrese un porcentaje de descuento a aplicar: "));
	precioBruto = precio1 + precio2 + precio3;
	promedio = precioBruto / 3;
	precioFinal = precioBruto + precioBruto * impuesto / 100;
	precioConDescuento = precioFinal - precioFinal * descuento / 100;
	alert("Producto 1 y Precio 1: " + producto1 + " " +  precio1 + " Producto 2 y Precio 2: " + producto2 + " " + precio2 + " Producto 3 y Precio 3: " + producto3 + " " + precio3 + " Precio Bruto: " + precioBruto + " Promedio: " + promedio + " Precio Final: " + precioFinal + " Descuento: " + descuento + " Precio con descuento: " + precioConDescuento);
}

