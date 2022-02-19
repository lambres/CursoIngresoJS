function CalcularPrecio()
/*
Zevallos Lambrescht Ruben Darío
División K
Ejercicio FerreteIluminación con Switch() + IF
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, 
si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó. 
*/
{
    let cantidadLamparas;
    let marca;
    let descuento;
    let importeNeto;
    let precioUnitario;
    const PRECIO = 35;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas =  parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;

    switch(cantidadLamparas)
    {
        //para el caso que compre 1 o 2 lámparas
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else if(marca == "FelipeLamparas")
            {
                descuento = 10;
            }
            else
            {
                descuento = 5;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
    }
    precioUnitario = PRECIO - PRECIO * descuento / 100;
    importeNeto = cantidadLamparas * precioUnitario; 

    if(importeNeto > 120)
    {
        IIBB = importeNeto * 10 / 100;
        alert("Usted pago "+ IIBB+" de Ingresos Brutos.");
        importeNeto = importeNeto + IIBB;
    }

    document.getElementById("txtIdprecioDescuento").value = importeNeto;
}