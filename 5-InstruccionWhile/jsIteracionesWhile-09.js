//Navarro Juan Div H, WHILE 9
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimerNumero;
	var numeroIngresado;
	var numeroMaximo;//Variable que contenga maximo o minimo no tiene que estar inicializada
	var numeroMinimo;//Variable que contenga maximo o minimo no tiene que estar inicializada
	var seguir;
	//iniciar variables
	seguir=true;
	banderaDelPrimerNumero=true;
	while(seguir==true)
	{
		numeroIngresado=prompt("Ingrese un  numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Error.. Ingrese un NÚMERO");
		}
		if(numeroIngresado>numeroMaximo||banderaDelPrimerNumero==true)
		{
			numeroMaximo=numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo||banderaDelPrimerNumero==true)
		{
			numeroMinimo=numeroIngresado;
			banderaDelPrimerNumero=false;
		}
		seguir=confirm("Ingresar otro numero?");
	}
	txtIdMaximo.value="El numero maximo que ingresó es "+numeroMaximo;
	txtIdMinimo.value="El numero minimo que ingresó es "+numeroMinimo;
}//FIN DE LA FUNCIÓN