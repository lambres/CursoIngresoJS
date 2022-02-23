/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
Ruben Darío Zevallos Lambrescht
División K
Ejercicio 10 While
*/
function mostrar() {
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioNegativos = 0;
	var promedioPositivos = 0;
	var diferenciaPosNeg = 0;

	respuesta = "s";

	while (respuesta == "s") {
		//Toma de datos
		numeroIngresado = parseInt(prompt("Ingrese un número:"));
		respuesta = prompt("Desea continuar? ''s'' para continuar").toLowerCase();

		if (numeroIngresado < 0) {
			//1-Suma de los negativos.
			sumaNegativos += numeroIngresado;
			// 4-Cantidad de negativos.
			cantidadNegativos++;
		}
		else if (numeroIngresado == 0) {
			// 5-Cantidad de ceros.
			cantidadCeros++;
		}
		else {
			// 2-Suma de los positivos.
			sumaPositivos += numeroIngresado;
			// 3-Cantidad de positivos.
			cantidadPositivos++;
		}

		if (numeroIngresado % 2 == 0) {
			// 6-Cantidad de números pares.
			cantidadPares++;
		}
	}//fin del while

	if (cantidadPositivos > 0) {
		// 7-Promedio de positivos.
		promedioPositivos = sumaPositivos / cantidadPositivos;

	}
	if (cantidadNegativos > 0) {
		// 8-Promedios de negativos.
		promedioNegativos = sumaNegativos / cantidadNegativos;

	}
	// 9-Diferencia entre positivos y negativos, (positvos-negativos). 
	diferenciaPosNeg = cantidadPositivos - cantidadNegativos;

	document.write("<br>1-Suma de los negativos:" + sumaNegativos + "</br>");
	document.write("<br>2-Suma de los positivos:" + sumaPositivos + "</br>");
	document.write("<br>3-Cantidad de positivos:" + cantidadPositivos + "</br>");
	document.write("<br>4-Cantidad de negativos:" + cantidadNegativos + "</br>");
	document.write("<br>5-Cantidad de ceros:" + cantidadCeros + "</br>");
	document.write("<br>6-Cantidad de números pares:" + cantidadPares + "</br>");
	document.write("<br>7-Promedio de positivos:" + promedioPositivos + "</br>");
	document.write("<br>8-Promedios de negativos:" + promedioNegativos + "</br>");
}//FIN DE LA FUNCIÓN