function CalcularPrecio()
/*
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto 
con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
{




    let cantidadLamparas;
    let marca;
    let descuento;
    let importeBruto;
    let importeNeto;
    let precioUnitario;
    const PRECIO = 35;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas =  parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;






    //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamparas >= 6)
    {
        descuento = 50;
    }/*B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace
         un descuento del 40 % y si es de otra marca el descuento es del 30%.*/
    else if (cantidadLamparas == 5)
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        /*C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o
         “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca 
         el descuento es del 20%.
         */
        
        else if (cantidadLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                    {
                        descuento = 25;
                    }
                    else
                    {
                        descuento = 20;
                    }
            }
            /*D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  
                el descuento es del 15%, si es  “FelipeLamparas” se hace un 
                descuento del 10 % y si es de otra marca un 5%.*/    
        else if (cantidadLamparas == 3)
            {
                if (marca == "ArgentinaLuz")
                {
                    descuento = 15;
                }
                else if (marca == "FelipeLamparas")
                {
                    descuento = 10
                }
                else
                {
                    descuento = 5;
                }
            }
        else
        {
            descuento = 0;
        }

    precioUnitario = PRECIO - PRECIO * descuento / 100;
    importeNeto = cantidadLamparas * precioUnitario; 

    if(importeNeto > 120)
    {
        IIBB = importeNeto * 10 / 100;
        alert("Usted pago "+ IIBB+" de Ingresos Brutos.");
        importeBruto = importeNeto + IIBB;
    }

    document.getElementById("txtIdprecioDescuento").value = importeBruto;
}

s