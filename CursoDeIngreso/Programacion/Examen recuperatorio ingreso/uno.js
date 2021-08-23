/*
1. Una cervecería necesita realizar un sistema de ventas online, donde 
se calculará las preferencias de 10 usuarios del sitio.
Los datos necesarios son:
-Nombre 
-Genero: (Masculino – Femenino –No binario)
-Edad (validar que sea mayor a 18 años)
-Tipo de cerveza:  Roja – Honey –Negra - Golden
-Preferencia: (tirada – en botella)
Calcular y mostrar en un document.write:
a.	Porcentaje de usuarios que prefieren cada tipo de cerveza.
b.	Cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada.
c.	Preferencia del Masculino de más edad que toma Golden.


*/
function mostrar()
{
	var nombre;
	var genero;
	var edad;
	var tipoDeCerveza;
	var preferencia;
	var i;
	var contadorRoja;
	var contadorHoney;
	var contadorNegra;
	var contadorGolden;
	var contadorRojaTiradaF;
	var edadMasculinoMayor;
	var banderaMasculinoMayor;
	var preferenciaMasculino;
	var porcentajeRoja;
	var porcentajeHoney;
	var porcentajeNegra;
	var porcentajeGolden;

	i=0;
	contadorRoja=0;
	contadorHoney=0;
	contadorNegra=0;
	contadorGolden=0;
	contadorRojaTiradaF=0;
	banderaMasculinoMayor=true;
	while(i<10)
	{
		nombre=prompt("Ingrese Nombre");
		while(!isNaN(nombre)||nombre=="")
		{
			nombre=prompt("Error.. Ingrese un nombre valido");
		}
		genero=prompt("Ingrese Genero");
		while(genero!="M"&&genero!="F"&&genero!="NB")
		{
			genero=prompt("ingrese genero valido (M, F o NB");
		}
		edad=prompt("Ingrese Edad");
		edad=parseInt(edad);
		while(edad<18||isNaN(edad))
		{
			edad=prompt("Ingrese un numero mayor a 18");
			edad=parseInt(edad);
		}
		tipoDeCerveza=prompt("Que tipo de cerveza es?");
		while(tipoDeCerveza !="Roja" &&tipoDeCerveza !="Honey" &&tipoDeCerveza !="Negra" &&tipoDeCerveza !="Golden")
		{
			tipoDeCerveza=prompt("Error.. Ingrese una valida (Roja – Honey –Negra - Golden)");
		}
		preferencia=prompt("Tirada o en botella?")
		while(preferencia !="Tirada" && !="en botella")
		{
			preferencia=prompt("Error.. Tirada o en botella?");
		}
		switch(tipoDeCerveza)
		{
			case "Roja":
			contadorRoja++;
			if(genero=="F"&&preferencia=="Tirada"&&edad>25&&edad<35)//B
			{
				contadorRojaTiradaF++;
			}
			break;

			case "Honey":
			contadorHoney++;
			break;

			case "Negra":
			contadorNegra++;
			break;

			case "Golden":
			contadorGolden++
			if(genero=="Masculino")//C
			{
				if(edad>edadMasculinoMayor||banderaMasculinoMayor)
				{
					edadMasculinoMayor=edad;
					preferenciaMasculino=preferencia;
					banderaMasculinoMayor=false;
				}
			}
			break;
		}
		if(genero=="Masculino")
		{

		}
		i++;
	}//FIN DEL WHILE
	//A
	porcentajeRoja=contadorRoja*100/10;
	porcentajeHoney=contadorHoney*100/10;
	porcentajeNegra=contadorNegra*100/10;
	porcentajeGolden=contadorGolden*100/10;
	document.write("El porcentaje de usuarios que prefieren ROJA es del "+porcentajeRoja+"% <br>"+
		"El porcentaje de usuarios que prefieren HONEY es del "+porcentajeHoney+"% <br>"+
		"El porcentaje de usuarios que prefieren NEGRA es del "+porcentajeNegra+"% <br>"+
		"El porcentaje de usuarios que prefieren GOLDEN es del "+porcentajeGolden+"% <br>"+
		"La cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada es de "+contadorRojaTiradaF+"<br>"+
		"La preferencia del Masculino de más edad que toma Golden es "+preferenciaMasculino);

}//FIN DEL EJERCICIO
