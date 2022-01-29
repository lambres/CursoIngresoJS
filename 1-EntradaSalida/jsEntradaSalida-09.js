/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro 3 variables, una para el sueldo original, una para el aumento y otra para el nuevo sueldo

	let sueldo;
	let aumento;
	let sueldoIncrementado;

	//capturo el valor del formulario html y los parseo, asignandolo a la variable sueldo
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	
	//calculo el aumento del 10%
	aumento = sueldo * 10 / 100;
	//incremento al sueldo el aumento
	sueldoIncrementado = sueldo + aumento;
	//muestro el resultado en el cuadro de texto de la pagina html
	document.getElementById("txtIdResultado").value = sueldoIncrementado;
}
