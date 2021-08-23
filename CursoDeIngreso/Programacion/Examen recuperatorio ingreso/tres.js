/*
3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas en total
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento, de cuanto fue y el importe final con
Descuento.

*/


function mostrar()
{
	var seguir;
	var origen;
	var cantidadVacunas;
	var costoVuelo;
	var menorCantidadVacunas;
	var banderaMenorVacunas;
	var origenMenorVacunas;
	var acumuladorViajesAsia;
	var acumuladorViajesEuropa;
	var acumuladorViajesAmerica;
	var totalSinDesc;
	var totalConDesc;
	var descuento;

	seguir=true
	banderaMenorVacunas=true;
	acumuladorViajesAsia=0;
	acumuladorViajesEuropa=0;
	acumuladorViajesAmerica=0;
	descuento=0;
	while(seguir)
	{
		origen=prompt("Ingrese origen");
		while( origen!="Asia" &&origen !="Europa" && origen!="America")
		{
			origen=prompt("Error.. Ingrese un origen valido");
		}
		cantidadVacunas=prompt("Ingrese cantidad de vacunas");
		cantidadVacunas=parseInt(cantidadVacunas);
		while(cantidadVacunas<500000||cantidadVacunas>2500000||isNaN(cantidadVacunas))
		{
			cantidadVacunas=prompt("Error.. ingrese una cantidad valida (entre 500000 y 2500000)");
			cantidadVacunas=parseInt(cantidadVacunas);
		}
		costoVuelo=prompt("Ingrese costo de vuelo");
		costoVuelo=parseInt(costoVuelo);
		while(costoVuelo<1000000||costoVuelo>5000000||isNaN(costoVuelo))
		{
			costoVuelo=prompt("Ingrese un costo valido");
			costoVuelo=parseInt(costoVuelo);
		}
		if(cantidadVacunas<menorCantidadVacunas||banderaMenorVacunas)//A
		{
			menorCantidadVacunas=cantidadVacunas;
			origenMenorVacunas=origen;
			banderaMenorVacunas=false;
		}
		switch(origen)
		{
			case "Asia":
			acumuladorViajesAsia+=costoVuelo;
			break;

			case "Europa":
			acumuladorViajesEuropa+=costoVuelo;
			break;

			case "America":
			acumuladorViajesAmerica+=costoVuelo;
			break;
		}
		seguir=confirm("Registrar otro vuelo?");
	}//FIN DEL WHILE
	totalSinDesc=acumuladorViajesAmerica+acumuladorViajesAsia+acumuladorViajesEuropa;//B
	if(cantidadVacunas>10000000)
	{
		descuento=0.25;
	}
	else
	{
		if(cantidadVacunas>5000000&&cantidadVacunas<10000000)
		{
			descuento=0.15;
		}
		else
		{
			document.write("No hay descuento")
		}
	}
	totalConDesc=totalSinDesc+(totalSinDesc*descuento);
	document.write("El origen que envió menos vacunas fue "+origenMenorVacunas+"<br>"+
		"El total sin descuento a pagar por los gastos de los viajes es de $"+totalSinDesc+"<br>"+
		"El total con descuento es "+totalConDesc);
}
