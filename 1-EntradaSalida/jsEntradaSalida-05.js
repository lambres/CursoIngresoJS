/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// declaro dos variables, una para el nombre y otra para la edad
	let nombre;
	let edad;
	// Id en el html txtIdNombre txtIdEdad los guardo en las variables
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	//muestro en un alert los valores concatenados
	
	//alert("Usted se llama " + nombre + " y tiene " + edad + " años");
	
	// alternativa se muetra lo mismo de otra manera
	alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}

