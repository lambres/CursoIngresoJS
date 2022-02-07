/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
Ruben Dario Zevallos Lambrescht
División K
Ejercicio TP Agilidad aritmética 1
*/
var respuesta;
function comenzar()
{
    let numero1;
    let numero2;
    let operacion;
    
    let minimo = 1;
    let maximo = 10;
    numero1 = Math.round((Math.random() * (maximo - minimo) + minimo));
    document.getElementById("txtIdPrimerNumero").value = numero1;
	numero2 = Math.round((Math.random() * (maximo - minimo) + minimo));
    document.getElementById("txtIdSegundoNumero").value = numero2;
    operacion = Math.round((Math.random() * (4 - 1) + 1));
    
    switch (operacion){
        case 1://suma
            document.getElementById("txtIdOperador").value = "+";
            respuesta = numero1 + numero2;
            break;
        case 2://resta
            document.getElementById("txtIdOperador").value = "-";
            respuesta = numero1 - numero2;
            break;
        case 3://multiplicacion
            document.getElementById("txtIdOperador").value = "*";
            respuesta = numero1 * numero2;    
            break;
        case 4://division
            document.getElementById("txtIdOperador").value = "/";
            respuesta = numero1 / numero2;
            break;
    }
    
}//FIN DE LA FUNCIÓN
function Responder()
{
	let respuestaUsuario;
    respuestaUsuario = document.getElementById("txtIdRespuesta").value;
    if (respuesta == respuestaUsuario){
        alert("Respuesta correcta");
    }else{
        alert("Respuesta incorrecta")
    }

}//FIN DE LA FUNCIÓN
