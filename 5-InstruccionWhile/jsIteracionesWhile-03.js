/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Ruben Dario Zevallos Lambrescht
División K
Ejercicio While 3
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while (claveIngresada != "utn750"){
		console.log("Contraseña Inválida");
	}
	alert("Contraseña correcta, puede ingresar.")
	
}//FIN DE LA FUNCIÓN
