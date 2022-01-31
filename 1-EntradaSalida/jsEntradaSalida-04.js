/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	//Declarar variable
	let nombre;
	//muestro el prompt y guardo el valor en la variable
	nombre = prompt("Ingrese su nombre", "Dario");
	//muestro la variable en el cuadro de texto
	document.getElementById("txtIdNombre").value = nombre
}

