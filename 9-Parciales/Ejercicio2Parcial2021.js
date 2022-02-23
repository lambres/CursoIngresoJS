/*
Autor: 
EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" )
 y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que 
ingresar 
se debe reportar
a)  El nombre de la persona más joven que se dio astrazeneca
b)  El porcentaje de mayores a 18 que tuvieron la enfermedad
c)  El rango etario (por década) que más vacunas se aplicó 
*/

function mostrar()
{
    var nombre;
    var edad;
    var vacuna;
    var covid;
    var masJoven;
    var mayorCovid;
    var promedEdad;
    var nombreMasJoven;
    var mensaje;
    var respuesta="si";
    var banderaJoven=0;
    var contMayores=0;
    var contTotal=0;
    var acomEdad=0;
    var contAstraz=0;
    var contSinoph=0;
    var contSputni=0;
    var cont1=0;
    var cont2=0;
    var cont3=0;
    var cont4=0;
    var cont5=0;
    var cont6=0;
    var cont7=0;
    var cont8=0;

    while(respuesta=="si")
    {
    contTotal++;
    nombre=prompt("ingrese nombre");
    edad=prompt("ingrese edad");
    edad=parseInt(edad);
    vacuna=prompt("ingrese vacuna: astrazeneca, sinopharm, sputnik");
    while(vacuna!="astrazeneca" && vacuna!="sinopharm" && vacuna!="sputnik")
    {
        vacuna=prompt("Error. ingrese vacuna: astrazeneca, sinopharm, sputnik");
    }
    covid=prompt("contrajo covid?, si o no");

    if(contTotal==1 || vacuna=="astrazeneca" && edad<masJoven)
    {
        masJoven=edad;
        nombreMasJoven=nombre;//A
    }
    if(covid=="si" && edad>18)
    {
        contMayores++;
    }
        respuesta=prompt("agregar mas personas?");
}

    mayorCovid=(contMayores*contTotal)/100;//B
    
    while(edad>0 || edad<81)
    {
        if(edad<11)
    {
        cont1++;
    }
    else
    {
        if (edad>9 && edad<21) 
        {
            cont2++;
        }
        else
        {
            if(edad>19 && edad<31)
            {
                cont3++;
            }
                else
                {
                  if (edad>29 && edad<41) 
                     {
                        cont4++;
                     }
                     else
                         {
                            if(edad>39 && edad<51)
                              {
                                cont5++;
                             }
                             else
                                {
                                   if (edad>49 && edad<61) 
                                     {
                                        con6++;
                                      }
                                      else
                                       {
                                         if(edad>59 && edad<71)
                                            {
                                                cont7++;
                                            }
                                            else
                                            {
                                                if(edad>69 && edad<81)
                                                {
                                                    cont8++;
                                                }
                                            }

                                             
                                        }
                                  }
            
                            }
                 }
          }

      }
    }

    if(cont1>cont2&&cont1>cont3&&cont1>cont4&&cont1>cont5&&cont1>cont6&&cont1>cont7&&cont1>cont8)
    {
        mensaje="de 1 a 10 años";
    }
    else
    {
        if (cont2>cont3&&cont2>cont4&&cont2>cont5&&cont2>cont6&&cont2>cont7&&cont2>cont8) 
        {
           mensaje="de 10 a 20 años";
        }
        else
        {
            if(cont3>cont4&&cont3>cont5&&cont3>cont6&&cont3>cont7&&cont3>cont8)
            {
                mensaje="de 20 a 30 años";
            }
                else
                {
                  if (cont4>cont5&&cont4>cont6&&cont4>cont7&&cont4>cont8) 
                     {
                        mensaje="de 30 a 40 años";
                     }
                     else
                         {
                            if(cont5>cont6&&cont5>cont7&&cont5>cont8)
                              {
                                mensaje="de 40 a 50 años";
                             }
                             else
                                {
                                   if (cont6>cont7&&cont6>cont8) 
                                     {
                                        mensaje="de 50 a 60 años";
                                      }
                                      else
                                       {
                                         if(cont7>cont8)
                                            {
                                                mensaje="de 60 a 70 años";
                                            }
                                            else
                                            {
                                                  mensaje="de 70 a 80 años";
                                             }
                                       }

                                             
                                 }
                         }
            
                     }
             }
         }

      }


    alert("El nombre de la persona más joven que se dio astrazeneca:  "+nombreMasJoven+
        ", El porcentaje de mayores que tuvieron la enfermedad: "+mayorCovid+
        "");
}











switch(vacuna)
    {
        case "astrazeneca":
            contAstraz++;
        break;
        case "sinopharm":
            contSinoph++;
        break;
        default:
            contSputni++;
        break;
}

if(contAstraz>contSinoph&&contAstraz>contSputni)
{
    mensaje="AstraZeneca";
}
else
{
    if(contSinoph>contSputni)
    {
        mensaje="sinopharm";
    }
    else
    {
        mensaje="sputnik";
    }
}
