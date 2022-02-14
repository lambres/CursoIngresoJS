/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
Ruben Dario Zevallos Lambrescht
División K
rompecoco sabado 5 febrero
Ejercicio 1 Entrada Salida
*/
function mostrar() {
/* AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores
Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y 
los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia. 
La cola del mismo se construirá con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la 
construcción en masa de 10 cometas. 
Tener en cuenta que los valores de entrada están expresados en Cms.
*/
	let diametroMayor;
	let diametroMenor;
	let ladoMenor;
	let ladoMayor;
	let perimetro;
	let varillaUnit;
	let cantPapel;
	let totalVarilla;

	diametroMayor = prompt("Ingrese el diámetro (en cm) mayor del cometa:");
	diametroMayor = parseInt(diametroMayor);
	diametroMenor = prompt("Ingrese el diámetro (en cm) menor del cometa:");
	diametroMenor = parseInt(diametroMenor);
	ladoMayor = prompt("Ingrese el lado (en cm) mayor del cometa:");
	ladoMayor = parseInt(ladoMayor);
	ladoMenor = prompt("Ingrese el lado (en cm) menor del cometa:");
	ladoMenor = parseInt(ladoMenor);

	//Calculo de varillas
	perimetro = 2 * (ladoMayor + ladoMenor);
	varillaUnit = perimetro + diametroMayor + diametroMenor;
	totalVarilla = varillaUnit * 10 / 100;

	mensaje = "Usted va a necesitar " + totalVarilla + " m de varillas";


	// calculo de papel
	

	alert (mensaje);

}

