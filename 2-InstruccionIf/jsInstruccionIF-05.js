function mostrar()
{
//Defino varfiable
let edad;
//tomo la edad  
edad = parseInt(document.getElementById("txtIdEdad").value);
//muestro el texto Eres mayor de edad si se cumple la condicion > 18 años
if (!(edad >= 13 && edad <= 17))
{
	alert("No Eres Adolescente");
}

}//FIN DE LA FUNCIÓN