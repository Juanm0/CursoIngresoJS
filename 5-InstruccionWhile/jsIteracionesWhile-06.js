/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var suma;
	var promedio;

	contador=0;
	suma=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		suma=parseInt(suma);
		suma+=numeroIngresado;
	  //suma=suma+numeroIngresado
	  //contador = contador + 1;
	    contador
	}
	promedio=suma/contador;
	txtIdSuma.value=suma;
	txtIdPromedio.value=promedio;

	
//txtIdSuma
//txtIdPromedio	
	
}//FIN DE LA FUNCIÓN