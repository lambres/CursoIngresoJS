/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 3 Entrada Salida
*/
function mostrar() {
	var nombreIngresado;
	nombreIngresado = document.getElementById("txtIdNombre").value;//nombre del input del archivo html
	alert(nombreIngresado);
	document.getElementById("txtIdNombre").value = "";//borro la caja de texto

}


