/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca 
el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un 
descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto 
con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Ruben Dario Zevallos Lambrescht
División K
Ejercicio TP Ferreteria Iluminación Parte A
 */
function CalcularPrecio() {
    /*declaro variable para capturar los valores del formulario html
    let CantLamparas;
    const PRECIO = 35;
    CantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    if (CantLamparas >= 6) {
        document.getElementById("txtIdprecioDescuento").value = CantLamparas * PRECIO * .5;
    }
    */
    let cantidadDeLamparas;
    let marca;
    let descuentoCalculado;
    let PrecioLampara;
    let preciocondescuento;
    let PrecioBruto;
    let porcentaje;
    let impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    PrecioLampara = 35;
    porcentaje = 0;
    PrecioBruto = cantidadDeLamparas * PrecioLampara;



    if (cantidadDeLamparas > 5) {
        porcentaje = 50;
    }
    descuentoCalculado = PrecioBruto * porcentaje / 100;
    precioFinal = PrecioBruto - descuentoCalculado;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;


}
