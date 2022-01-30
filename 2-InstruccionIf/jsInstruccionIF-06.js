function mostrar()
{
//Defino varfiable
let edad;
//tomo la edad  
edad = parseInt(document.getElementById("txtIdEdad").value);
//muestro el texto Eres mayor de edad si se cumple la condicion > 18 años
if (edad >= 18){
	alert("Eres mayor de edad");
}else if(edad >= 13 && edad <= 17){
	alert("Eres Adolescente");
}else{
	alert("Eres un niño");
}



}//FIN DE LA FUNCIÓN