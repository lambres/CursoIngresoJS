/*
Ruben Dario Zevallos Lambrescht
Division K
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	//declaro 3 variables, una para el importe original, una para el descuento y otra para el nuevo valor

	let importe;
	let descuento;
	let NuevoImporte;

	//capturo el valor del formulario html y los parseo, asignandolo a la variable importe
	importe = parseFloat(document.getElementById("txtIdImporte").value);

	//calculo el descuento del 25%
	descuento = importe * 25 / 100;
	//al importe le aplico el descuento
	NuevoImporte = importe - descuento;
	//muestro el resultado en el cuadro de texto de la pagina html
	document.getElementById("txtIdResultado").value = NuevoImporte;


	/*
	RESUMEN
	ENTRADA
	prompt(string,valorxdefecto);
	variable = document.getElementById("IdDelCampoHtml").value;
	
	SALIDA
	alert(string mas variables);
	document.getElementById("IdFelCampoHtml").value = valor a asignar
	
	operaciones
	suma = valor1 + valor2
	resta = valor1 - valor2
	mult = valor1 * valor2
	div = valor1 / valor2
	modulo = valor1 % valor2
	
	para cnvertir string a numero
	parseInt(string) o parseFloat(string)
	para el caso de las restantes operaciones matematicas convierte automaticamente a numero los valores
	*/
}