/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //defino las variables
    let tempF;
    let tempC;
    //obtengo el valor de la temperatura a convertir del form html
    tempF = parseFloat(document.getElementById("txtIdTemperatura").value);
    //muestro el valor convertido a grados centigrados
    tempC = (tempF - 32)*9/5;
    alert (`${tempF.toFixed(2)} grados Fahrenheit equivale a ${tempC.toFixed(2)} grados centigrados`);
}

function CentigradosFahrenheit () 
{
	   //defino las variables
       let tempF;
       let tempC;
       //obtengo el valor de la temperatura a convertir del form html
       tempC = parseFloat(document.getElementById("txtIdTemperatura").value);
       //muestro el valor convertido a grados Fahrenheit
       tempF = (tempC * 9 / 5) + 32;
       alert (`${tempC.toFixed(2)} grados centígrados equivale a ${tempF.toFixed(2)} grados Fahrenheit`);
}
