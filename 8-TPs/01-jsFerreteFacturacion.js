/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    /*Ruben Dario Zevallos Lambrescht
    División K
    Ejercicio TP Ferreteria A
    */
    //defino 4 variables, una para cada precio y una para el resultado
	let importe1;
    let importe2;
    let importe3;
    let suma;
    //capturo los valores del formulario html
    importe1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    importe2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    importe3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    //sumo los valores y los acumulo en la variable suma
    suma = importe1 + importe2 + importe3;
    //muestro el valor de la variable suma en un mensaje
    alert(`La suma de los valores ingresados es de ${suma.toFixed(2)}`);
}
function Promedio () 
{
    /*
    Ruben Dario Zevallos Lambrescht
    División K
    Ejercicio TP Ferreteria B
    */
    //defino 4 variables, una para cada precio y una para el resultado
	let importe1;
    let importe2;
    let importe3;
    let promedio;
    //capturo los valores del formulario html
    importe1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    importe2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    importe3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    //calculo el promedio y los acumulo en la variable promedio
    promedio = (importe1 + importe2 + importe3)/3;
    //muestro el promedio en un mensaje
    alert(`La promedio de los valores ingresados es de ${promedio.toFixed(2)}`);
	
}
function PrecioFinal () 
{
    /*
    Ruben Dario Zevallos Lambrescht
    División K
    Ejercicio TP Ferreteria C
    */
    //defino 6 variables, una para cada precio, una para el neto de los articulos,
    //una para el impuesto del IVA y una para el precio bruto
	let importe1;
    let importe2;
    let importe3;
    let neto;
    let impuesto;
    let preciobruto;
    //capturo los valores del formulario html
    importe1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    importe2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    importe3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    //calculo el importe neto de los artículos
    neto = importe1 + importe2 + importe3;
    //calculo el impuesto y los acumulo en la variable impuesto
    impuesto = neto * .21;
    //calculo el precio bruto
    preciobruto = neto + impuesto;
    //muestro el valor bruto, que es la suma de los precios mas el impuesto
    alert(`El precio final mas IVA es de ${preciobruto.toFixed(2)}`);
	
}