/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var suma;
	var promedio;
	var otroNumero;

	contador=0;
	suma=0;
	otroNumero=true;

	while(otroNumero==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		suma=parseInt(suma);
		suma+=numeroIngresado;
	  //suma=suma+numeroIngresado
	  //contador = contador + 1;
	    contador++;
	    otroNumero=confirm("Ingresar otro numero?")
	}
	promedio=suma/contador;
	txtIdSuma.value=suma;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN