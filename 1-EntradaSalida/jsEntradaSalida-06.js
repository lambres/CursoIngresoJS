/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro tres variables, una para cada sumando y una para el resultado
	let sumando1;
	let sumando2;
	let resultado;
	//tomo los valores y los asigno a las variables del formulario html
	sumando1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	sumando2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	

	//sumo los valores
	resultado = sumando1 + sumando2

	//muestro el contenido de la variable resultado
	alert (`El resultado de la suma es ${resultado}`)
}

