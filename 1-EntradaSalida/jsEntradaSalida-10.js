/* Navarro Juan Ejercicio 10bis Div H
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let Sueldo;
    let Resultado;
    let porcentaje
	
	Sueldo = txtIdImporte.value;
	Sueldo=parseInt(Sueldo);
	porcentaje=parseInt(porcentaje);
	porcentaje=prompt("ingrese el porcentaje");
	Resultado=Sueldo *(-(porcentaje*0.01)) + Sueldo;
	txtIdResultado.value = Resultado;
	
	
    //txtIdImporte
	//txtIdResultado
}

