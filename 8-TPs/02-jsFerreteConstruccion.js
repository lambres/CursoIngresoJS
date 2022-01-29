/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
 rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //defino las variables a utilizar
    let largo;
    let ancho;
    let perimetro;
    let cantidadtotal;
    //tomo los valores del campo en el formulrio html
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    //calculo el perimetro
    perimetro = (largo + ancho) * 2;
    //calculo el lotal de alambre a comprar
    cantidadtotal = perimetro * 3;
    //muestro la cantidad de alambre a comprar
    alert(`La cantidad de alambres a comprar es de ${cantidadtotal.toFixed(2)} metros linales`);
}
function Circulo () 
{
	   //defino las variables a utilizar
       let radio;
       let perimetro;
       let cantidadtotal;
       const pi = 3.14;
       //tomo los valores del campo en el formulrio html
       radio = parseFloat(document.getElementById("txtIdRadio").value);
       //calculo el perimetro
       perimetro = 2 * radio * pi;
       //calculo el lotal de alambre a comprar
       cantidadtotal = perimetro * 3;
       //muestro la cantidad de alambre a comprar
       alert(`La cantidad de alambres a comprar es de ${cantidadtotal.toFixed(2)} metros linales`);
}
function Materiales () 
{
	    //defino las variables a utilizar
        let largo;
        let ancho;
        let superficie;
        let totalCemento;
        let totalCal;
        //tomo los valores del campo en el formulrio html
        largo = parseFloat(document.getElementById("txtIdLargo").value);
        ancho = parseFloat(document.getElementById("txtIdAncho").value);
        //calculo la suoerficie
        superficie = largo  * ancho;
        //calculo el lotal de materiles a comprar
        totalCemento = superficie * 2;
        totalCal = superficie * 3;
        //muestro la cantidad de materiales a comprar
        alert(`Para una superficie de ${superficie} necesito ${totalCemento.toFixed(2)} bolsas de cemento y ${totalCal.toFixed(2)} bolsas de cal`);
}