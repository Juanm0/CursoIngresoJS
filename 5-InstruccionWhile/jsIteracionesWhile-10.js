/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN


/*

Navarro, Juan Div H
Ejercicio 10 BIS While
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-Maximo de valoresIngresados
11-Minimo de los positivos



function mostrar()
{
	//declarar contadores y variables 
	var numeroIngresado;//Numero ingresado por el usuario
	var sumaPositivos;//Suma de positivos
	var	sumaNegativos;//Suma de negativos
	var seguir;//Variable para entrar al while y pedir lo solicitado en este caso numeros.
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var difrenciaPositivosNegativos;//SumaPositivos - SumaNegativos
	var maximo;
	var minimoPositivos;
	var bandera; //Variable para averiguar maximo y minimo

	//iniciar variables
	seguir = true;
	bandera = true;
	sumaNegativos = 0;
	cantidadNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	
	
	while(seguir == true)
	{
		numeroIngresado = prompt("Ingresa un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error...Ingresa un numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado>maximo ||bandera == true)
		{
			maximo = numeroIngresado;
		}
		

		if(numeroIngresado < 0 )
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1;

		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos = cantidadPositivos + 1;
				if(numeroIngresado < minimoPositivos || bandera == true)
				{
					minimoPositivos = numeroIngresado;
					bandera = false;
				}
			}
			else
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}
		if(numeroIngresado%2==0)
		{
			cantidadPares = cantidadPares + 1;
		}

		seguir = confirm("desea ingresar otro numero?");
	}

	
	
	difrenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	
	document.write("La suma de negativos es : " + sumaNegativos + "<br>");
	document.write("La suma de positivos es : " + sumaPositivos + "<br>");
	document.write("La cantidad de negativos es : " + cantidadNegativos + "<br>");
	document.write("La cantidad de positivos es : " + cantidadPositivos + "<br>");
	document.write("La cantidad de ceros es : " + cantidadCeros + "<br>");
	document.write("La cantidad de pares : " + cantidadPares + "<br>");

	if(cantidadNegativos != 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		document.write("El promedio de negativos es : " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos. <br>" );
	}
	if(cantidadPositivos!=0)
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
		document.write("El promedio de positivos es : "+ promedioPositivos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos. <br>" );
	}
	
	
	document.write("Diferencia entre positivos y negativos : "+ difrenciaPositivosNegativos + "<br>");
	document.write("Maximo de todos los numeros : " + maximo + "<br>");
	document.write("Minimo de los positivos : "+ minimoPositivos + "<br>");
}//FIN DE LA FUNCIÓN*/
