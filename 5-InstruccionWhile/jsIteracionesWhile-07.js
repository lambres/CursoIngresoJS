/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	/*
	Ruben Dario Zevallos Lambrescht
	División K
	Ej 7 While
	*/
	let contador;
	let acumulador;
	let respuesta;

	contador = 0;
	acumulador = 0;
	//console.log(respuesta);
	do {
		acumulador += parseInt(prompt("Ingrese un número:"));
		contador++;
		respuesta = prompt("¿Desea continuar (s para continuar)?").toLowerCase();
		//console.log(respuesta.toLowerCase());
	} while (respuesta == 's');
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN