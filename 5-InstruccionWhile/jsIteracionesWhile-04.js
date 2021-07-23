/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado < 1 || numeroIngresado > 8)
	{
		numeroIngresado=prompt("Error.. Ingrese un numero entre 0 y 9");
	}

	txtIdNumero.value=numeroIngresado;
//txtIdNumero	
}//FIN DE LA FUNCIÓN