/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
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
    document.getElementById("txtIDSegundoNumero").value = numero2;
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
    temporizador = setTimeout(Responder,4000)    
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
