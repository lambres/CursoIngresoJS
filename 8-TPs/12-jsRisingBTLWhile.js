/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

Alumno Zevallos Lambrescht Rubén Darío
División K
Ejercicio TP12 While
*/
function ComenzarIngreso() {
	//definicion de variables
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let nroLegajo;
	let nacionalidad;

	//A.	Edad, entre 18 y 90 años inclusive.
	do 
	{
		edad = prompt("Ingrese la edad (de 18 años a 90 años son válidos)");
		edad = parseInt(edad);
	} while (edad < 18 || edad > 90);
	document.getElementById("txtIdEdad").value = edad;
	
	//B.	Sexo, “M” para masculino y “F” para femenino
	do {
		sexo = prompt('Ingrese el sexo ("M" "F" son válidos)');
		sexo = sexo.toLowerCase();
	} while (sexo != "m" && sexo != "f");
	document.getElementById("txtIdSexo").value = sexo;
	
	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	do {
		estadoCivil = prompt('Ingrese el esto civil (1=Soltero 2=Casado 3=Divorsiado 4=Viudo)');
		estadoCivil = parseInt(estadoCivil);
	} while (estadoCivil < 1 && estadoCivil > 5);
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	//D.	Sueldo bruto, no menor a 8000.
	do {
		sueldoBruto = prompt('Ingrese el sueldo (Valor no menos a 8000)');
		sueldoBruto = parseInt(sueldoBruto);
	} while (sueldoBruto < 8000);
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	
	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	do {
		nroLegajo = prompt('Ingrese el nro de Legajo (Valor de 4 dígitos)');
		nroLegajo = parseInt(nroLegajo);
	} while (nroLegajo < 999 || nroLegajo > 10000);
	document.getElementById("txtIdLegajo").value = nroLegajo;
	
	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	do {
		nacionalidad = prompt('Ingrese Nacionalidad "A" Argentino "E" Extranjero "N" Nacionalizado');
		nacionalidad = nacionalidad.toLowerCase();
	} while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n");
	document.getElementById("txtIdNacionalidad").value = nacionalidad;


}
