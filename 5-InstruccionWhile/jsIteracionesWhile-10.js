/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
//1-Suma de los negativos.
//2-Suma de los positivos.
//3-Cantidad de positivos.
//4-Cantidad de negativos.
//5-Cantidad de ceros.
//6-Cantidad de números pares.
//7-Promedio de positivos.
//8-Promedios de negativos.
//9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var IngresarOtroNumero;
	var contadorCeros;
	var contadorPositivos;
	var contadorNegativos;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var calculoRestaTotal;

	IngresarOtroNumero=true;
	sumaPositivos=0;
	sumaNegativos=0;
	contadorCeros=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorPares=0;

	while(IngresarOtroNumero==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);-4
		if(numeroIngresado>0)
		{
			sumaPositivos+=numeroIngresado;//2-Suma de los positivos.
			contadorPositivos++;//3-Cantidad de positivos.
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos+=numeroIngresado;//1-Suma de los negativos.
				contadorNegativos++;//4-Cantidad de negativos.
			}
			else
			{
				contadorCeros++;//5-Cantidad de ceros.
			}
		}
		if(numeroIngresado%2==0)//6-Cantidad de números pares.
		{
			contadorPares++;
		}
		IngresarOtroNumero=confirm("Desea ingresar otro numero?");
	}
	promedioPositivos=sumaPositivos/contadorPositivos;//7-Promedio de positivos.
	promedioNegativos=sumaNegativos/contadorNegativos;//8-Promedios de negativos.
	calculoRestaTotal=sumaPositivos+sumaNegativos;//9-Diferencia entre positivos y negativos, (positvos-negativos).
	document.write("1) La suma de los negativos es "+sumaNegativos+"<br>");
	document.write("2) La suma de los positivos es "+sumaPositivos+"<br>");
	document.write("3) La cantidad de numeros positivos es "+contadorPositivos+"<br>");
	document.write("4) La cantidad de numeros negativos es "+contadorNegativos+"<br>");
	document.write("5) La cantidad de ceros ingresados es "+contadorCeros+"<br>");
	document.write("6) La cantidad de números pares es de "+contadorPares+"<br>");
	document.write("7) El promedio de positivos es "+promedioPositivos+"<br>");
	document.write("8) El promedio de numeros negativos es "+promedioNegativos+"<br>");
	document.write("9) La diferencia entre positivos y negativos es "+calculoRestaTotal);


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
