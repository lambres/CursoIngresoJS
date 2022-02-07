/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.
Ruben Dario Zevallos Lambrescht
División K
Ejercicio TP Adivina el numero 2
*/

var numeroSecreto;
var contadorIntentos;

function comenzar() {
	//Genero el número RANDOM entre 1 y 100
	let maximo = 100;
	let minimo = 1;

	numeroSecreto = Math.round((Math.random() * (maximo - minimo) + minimo));
	//alert(numeroSecreto );
	contadorIntentos = 0
	document.getElementById("txtIdIntentos").value = ""
	document.getElementById("txtIdNumero").value = ""


}

function verificar() {
	let nroIngreado;
	contadorIntentos += 1;
	nroIngreado = parseInt(document.getElementById("txtIdNumero").value);
	console.debug("nroIngresado " + nroIngreado + " / numeroSecreto " + numeroSecreto);
	if (nroIngreado < numeroSecreto) {
		document.getElementById("txtIdIntentos").value = "Falta ....";
	} else if (nroIngreado == numeroSecreto) {
		switch (contadorIntentos) {
			case 1:
				document.getElementById("txtIdIntentos").value = "Usted es un Psiquico";
				break;
			case 2:
				document.getElementById("txtIdIntentos").value = "Excelente Percepción";
				break;
			case 3:
				document.getElementById("txtIdIntentos").value = "Esto es suerte";
				break;
			case 4:
				document.getElementById("txtIdIntentos").value = "Excelente Técnica";
				break;
			case 5:
				document.getElementById("txtIdIntentos").value = "Usted está en la media";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				document.getElementById("txtIdIntentos").value = "Falta técnica";
				break;
			default:
				document.getElementById("txtIdIntentos").value = "afortunado en el amor";
				break;

		}
	} else {
		document.getElementById("txtIdIntentos").value = "se pasó…";
	}


}