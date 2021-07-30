//  Navarro Juan Div H, Modelo de parcial 2020
/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//b) Del tipo con mas unidades, el promedio por compra
//c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	var agregarProducto;
	var productoIngresado;
	var precioProducto;
	var cantidadUnidades;
	var marcaProducto;
	var fabricanteProducto;
	var minimoPrecioAlchohol;
	var unidadesMinimoPrecioAlchohol;
	var fabricanteMinimoPrecioAlchohol;
	var precioFinal;
	var banderaAlcohol;
	var banderaMasUnidades;
	var mayorCantidadUnidades;
	var productoMasUnidades;
	var promedioMasUnidades;
	var contadorJabon;//ME CONFUNDI CON LOS CONCEPTOS DE CONTADOR Y ACUMULADOR, TENDRIA QUE INVERTIRLOS, PERO NO PASA NADA
	var contadorAlcohol;
	var contadorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;

	agregarProducto=0;
	banderaAlcohol=true;
	banderaMasUnidades=true;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol;
	unidadesMinimoPrecioAlchohol=0;
	while(agregarProducto<2)
	{
		productoIngresado=prompt("¿Que producto que desea?");
		while(productoIngresado!="Barbijo"&&productoIngresado!="Jabon"&&productoIngresado!="Alcohol")
		{
			productoIngresado=prompt("Error.. Ingrese un producto valido (Barbijo , Jabon o Alcohol)");
		}
		precioProducto=prompt("Ingrese el precio de su "+productoIngresado);
		precioProducto=parseInt(precioProducto);
		while(precioProducto<100||precioProducto>300)
		{
			precioProducto=prompt("Error.. Ingrese un precio entre 100 y 300");
			precioProducto=parseInt(precioProducto);
		}
		cantidadUnidades=prompt("¿Cuantas unidades de su "+productoIngresado+" desea llevar?");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(cantidadUnidades<1||cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("Error.. Ingrese una cantidad valida (hasta 1000 unidades)");
			cantidadUnidades=parseInt(cantidadUnidades);
		}
		marcaProducto=prompt("Ingrese la marca de su "+productoIngresado);
		fabricanteProducto=prompt("Ingrese el nombre del fabricante");
		precioFinal=cantidadUnidades*precioProducto;
		switch(productoIngresado)
		{
			case "Alcohol"://a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			acumuladorAlcohol++;
			contadorAlcohol+=cantidadUnidades;
			if(precioFinal<minimoPrecioAlchohol||banderaAlcohol==true)
			{
				minimoPrecioAlchohol=precioFinal;
				fabricanteMinimoPrecioAlchohol=fabricanteProducto;
				unidadesMinimoPrecioAlchohol=cantidadUnidades;
				banderaAlcohol=false;
			}
			break;

			case "Jabon"://c) Cuántas unidades de jabones hay en total
			acumuladorJabon++;
			contadorJabon+=cantidadUnidades;
			break;

			case "Barbijo":
			acumuladorBarbijo++;
			contadorBarbijo+=cantidadUnidades;
			break;
		}
		if(cantidadUnidades>mayorCantidadUnidades||banderaMasUnidades==true)
		{//b) Del tipo con mas unidades, el promedio por compra
			mayorCantidadUnidades=cantidadUnidades;
			productoMasUnidades=productoIngresado;
			banderaMasUnidades=false;
		}
		agregarProducto++;
	}
	if(contadorAlcohol>contadorJabon&&contadorAlcohol>contadorBarbijo)
	{
		promedioMasUnidades=contadorAlcohol/acumuladorAlcohol;
	}
	else
	{
		if(contadorBarbijo>contadorJabon)
		{
			promedioMasUnidades=contadorBarbijo/acumuladorBarbijo;
		}
		else
		{
			promedioMasUnidades=contadorJabon/acumuladorJabon;
		}
	}
	document.write("A) La cantidad de unidades del alcohol mas barato es de "+unidadesMinimoPrecioAlchohol+" unidades y su fabricante es "+fabricanteProducto+"<br>");
	document.write("B) El producto con más unidades es el "+productoMasUnidades+" y su promedio de compra es de "+promedioMasUnidades+" unidades <br>");
	document.write("C) Hay "+contadorJabon+" unidades de Jabon");
}