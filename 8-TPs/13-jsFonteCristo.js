/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
Alumno Zevallos Lambrescht Rubén Darío
División K
Ejercicio TP 13
*/
function NumerosPares () // parte A
{
    //Declaracion variables
    let numero;
    let mensaje;
    
    //declaración contadores y acumuladores e inicializar
    let acumuladorPares = 0;
    
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    mensaje = `A: la cantidad de pares desde ${numero} hasta el cero es: `;
    //a.	Se pedirán un número positivo y se 
    //mostrará la cantidad de números pares desde el número ingresado hasta el cero.
    if (numero < 1)
    {
        alert("El número ingresado no es positivo, verificar");
    }
    else
    {
        while (numero > 0)
        {
            if (numero % 2 == 0)
            {
                acumuladorPares ++;
            }
            numero--;
        }
        //muestro resultados
        //a:
        mensaje = mensaje + acumuladorPares;
        alert(mensaje);
    }
    
}

function NumerosImpares ()//parte B
{
    //b.	Se pedirán un número positivo y se mostrará la 
    //cantidad de números impares desde el número ingresado hasta el cero.
    //Declaracion variables
    let numero;
    let mensaje;
    
    //declaración contadores y acumuladores e inicializar
    let acumuladorImpares = 0;
    
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    mensaje = `B: la cantidad de impares desde ${numero} hasta el cero es: `;
    //B.	Se pedirán un número positivo y se 
    //mostrará la cantidad de números impares desde el número ingresado hasta el cero.
    if (numero < 1)
    {
        alert("El número ingresado no es positivo, verificar");
    }
    else
    {
        while (numero > 0)
        {
            if (numero % 2 != 0)
            {
                acumuladorImpares ++;
            }
            numero--;
        }
        //muestro resultados
        //b:
        mensaje = mensaje + acumuladorImpares;
        alert(mensaje);
    }
}

function NumerosDivisibles() //Parte C
{
    //Declaracion variables
    let numero;
    let mensaje;
    
    //declaración contadores y acumuladores e inicializar
    let acumuladorDivisibles = 0;
    
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    mensaje = `C: la cantidad de divisibles desde 1 al 100 es: `;
    //c.	Se pedirán un número positivo y se mostrará la cantidad de 
    //números divisibles de este número que se encuentran desde el 1 al 100.
    
    if (numero < 1)
    {
        alert("El número ingresado no es positivo, verificar");
    }
    else
    {
        for(let i = 1; i < 101; i++)
        {
            console.log(i);
            if (i % numero == 0)
            {
                acumuladorDivisibles ++;
            }
        }
        //muestro resultados
        //C:
        mensaje = mensaje + acumuladorDivisibles;
        alert(mensaje);
        
    }

}

function VerificarPrimo()//Parte D
{
    //Declaracion variables
    let numero;
    let mensaje;
    
    //declaración contadores y acumuladores e inicializar
    let acumuladorDivisibles = 0;
    
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    mensaje = `D: el número ${numero} `;
    //d.	Se pedirán un número positivo y se mostrará si el 
    //número es un número primo o no.

    
    if (numero < 1)
    {
        alert("El número ingresado no es positivo, verificar");
    }
    else
    {
        for(let i = 2; i <= numero; i++)
        {
            if (numero % i == 0)
            {
                acumuladorDivisibles ++;
            }
        }
        //muestro resultados
        //D:
        if (acumuladorDivisibles == 2)
        {
            mensaje = mensaje + "es primo";
        }
        else
        {
            mensaje = mensaje + "no es primo";
        }
        alert(mensaje);
    }
}

function NumerosPrimos()//parte E
{
    //Declaracion variables
    let numero;
    let mensaje;
    
    //declaración contadores y acumuladores e inicializar
    let acumuladorPrimos = 0;
    
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    mensaje = `D: cantidad de numeros primos entre ${numero} y 0 es: `;
    //E.	Se pedirán un número positivo y se mostrará si el 
    //número es un número primo o no.
    
    
    if (numero < 1)
    {
        alert("El número ingresado no es positivo, verificar");
    }
    else
    {    
        for (let i = 2 ; i <= numero; i++)
        {
            if(primo(i))
                {
                    acumuladorPrimos++;
                }    
        }
        mensaje = mensaje + acumuladorPrimos;
        alert(mensaje);
    }
}

function primo(numero)
{
    for(let i = 2; i < numero; i++) 
    {
        if (numero % i == 0)
        {
            return false;
        }
    }
    return true;
}
