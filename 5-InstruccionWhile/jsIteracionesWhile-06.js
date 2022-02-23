function mostrar() {
	/*
	Ruben Dario Zevallos Lambrescht
	División K
	Ej 6 While
	*/
	var contador;
	var acumulador;
	
	contador = 0;
	acumulador = 0;
	do 
	{
		acumulador += parseInt(prompt("Ingrese un número:"));
		contador++;
	}while (contador < 5);
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN