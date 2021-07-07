/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let Sueldo;
    let Resultado;
	
	Sueldo = txtIdImporte.value;
	Sueldo=parseInt(Sueldo);
	Resultado=Sueldo *(-0.25) + Sueldo;
	txtIdResultado.value = Resultado;
	
	
    //txtIdImporte
	//txtIdResultado
}

