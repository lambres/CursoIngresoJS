/*
Ruben Dario Zevallos Lambrescht
Division K
Ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	//declaro 3 variables
	let dividendo;
	let divisor;
	let resultado;
	//capturo los valores del formulario html
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	//asigno el resultado de la funcion modulo a la variable resultado
	resultado = dividendo % divisor
	//muestro el resultado por medio de la funcion ALERT
	alert(`El resto es ${resultado}`)
}
