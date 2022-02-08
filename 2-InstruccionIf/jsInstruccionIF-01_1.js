function mostrar()
{
	/* Al ingresar la palabra "auto", pedir marca
	por prompt y mostrar por alert

    Ruben Dario Zevallos Lambrescht
    División K
    Ejercicio 1 IF
    */
	
    //Defino varfiable
	let valorIngresado;
    let marca;
	//tomo por txtIdEdad del fomulario HTML el valor  
	valorIngresado = document.getElementById("txtIdEdad").value;
	//Si ingreso la palabra "auto" pido marca y muestro el valor inrouducido por alert
	if (valorIngresado == "auto"){
		marca = prompt("Ingrese la marca del vehículo:", "Chevrolet");
        alert("Usted ingresó la marca " + marca)
	}

}//FIN DE LA FUNCIÓN