/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 7 Entrada Salida
*/
function sumar() {
	//declaro 3 variables
	let numero1;
	let numero2;
	let resultado;
	//capturo los valores del formulario html
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//asigno el resultado de la operacion suma a la variable resultado
	resultado = numero1 + numero2;
	//muestro el resultado por medio de la funcion ALERT
	alert(`La suma es ${resultado}`);
}

function restar() {
	//declaro 3 variables
	let numero1;
	let numero2;
	let resultado;
	//capturo los valores del formulario html
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//asigno el resultado de la operacion restar a la variable resultado
	resultado = numero1 - numero2;
	//muestro el resultado por medio de la funcion ALERT
	alert(`La resta es ${resultado}`);
}

function multiplicar() {
	//declaro 3 variables
	let numero1;
	let numero2;
	let resultado;
	//capturo los valores del formulario html
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//asigno el resultado de la operacion multiplicacion a la variable resultado
	resultado = numero1 * numero2;
	//muestro el resultado por medio de la funcion ALERT
	alert(`El producto es ${resultado}`);
}

function dividir() {
	//declaro 3 variables
	let numero1;
	let numero2;
	let resultado;
	//capturo los valores del formulario html
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//asigno el resultado de la operacion division a la variable resultado
	resultado = numero1 / numero2;
	//muestro el resultado por medio de la funcion ALERT
	alert(`El cociente es ${resultado}`);
}

