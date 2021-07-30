/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var sumaPositivos;
	var multiplicacionNegativos;
	var agregarOtroNumero;
	var numeroIngresado;

	agregarOtroNumero=true;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	contador=0;

	while(agregarOtroNumero==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			sumaPositivos+=numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=(multiplicacionNegativos+1)*numeroIngresado;
		}
		agregarOtroNumero=confirm("¿Agregar otro número?");
	}

	txtIdSuma.value="La suma de los numeros positivos ingresados es "+sumaPositivos;
	txtIdProducto.value="La multiplicacion de los numeros negativos ingresados es "+multiplicacionNegativos;

}//FIN DE LA FUNCIÓN