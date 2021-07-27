
function mostrar()
{
    var tipoDeProducto;
	var precio;
	var cantidadProductosCargados;
	var cantidadUnidades;
	var fabricante;
	var marca;
	var alcoholMasBaratoPrecio;
	var alcoholMasBaratoBandera;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var contadorBarbijos;
	var acumuladorBarbijos;
	var contadorJabon;
	var acumuladorJabon;
	var contadorAlcohol;
	var acumuladorAlcohol;
	var tipoConMasUnidades;
	var promedio;
	var mensaje;

	promedio=parseInt(promedio);
	cantidadUnidades=0;
	cantidadProductosCargados=0;
	alcoholMasBaratoBandera="primera vez";
	contadorJabon=0;
	parseInt(contadorJabon);
	contadorBarbijos=0;
	parseInt(contadorBarbijos);
	contadorAlcohol=0;
	parseInt(contadorAlcohol);
	acumuladorJabon=0;
	acumuladorJabon=parseInt(acumuladorJabon);
	acumuladorAlcohol=0;
	acumuladorAlcohol=parseInt(acumuladorAlcohol);
	acumuladorBarbijos=0;
	acumuladorBarbijos=parseInt(acumuladorBarbijos);
	masUnidadesBandera="Primera vez";

	while(cantidadProductosCargados<5)
	{
		tipoDeProducto=prompt("Ingrese el producto que desea cargar");
		
		while(tipoDeProducto!="alcohol"&&tipoDeProducto!="jabon"&&tipoDeProducto!="barbijo")
		{
			tipoDeProducto=prompt("Error, ingrese una opcion valida");
		}

		precio=prompt("Ingrese el precio del producto");
		precio=parseInt(precio);

		while(precio<100||precio>300)
		{
			precio=prompt("Error, ingrese un precio valido");
			precio=parseInt(precio);
		}
		

		cantidadUnidades=prompt("Ingrese la cantidad de unidades");
		cantidadUnidades=parseInt(cantidadUnidades);

		while(cantidadUnidades<1||cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("Error, ingrese un numero valido");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("Ingrese marca");
		fabricante=prompt("Ingrese fabricante");

		if(tipoDeProducto=="alcohol")
		{
			if(alcoholMasBaratoBandera=="primera vez")
			{
				alcoholMasBaratoBandera="segunda";

				alcoholMasBaratoPrecio=precio;
				alcoholMasBaratoUnidades=cantidadUnidades;
				alcoholMasBaratoFabricante=fabricante;
			}
			else
			{
				if(alcoholMasBaratoPrecio>precio)
				{
					alcoholMasBaratoPrecio=precio;
					alcoholMasBaratoUnidades=cantidadUnidades;
					alcoholMasBaratoFabricante=fabricante;
				}
			}
		}

		switch(tipoDeProducto)
		{
			case "barbijo":
				contadorBarbijos=contadorBarbijos+1;
				acumuladorBarbijos=acumuladorBarbijos+cantidadUnidades;
				break;
			case "alcohol":
				contadorAlcohol=contadorAlcohol+1;
				acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
				break;
			case "jabon":
				contadorJabon=contadorJabon+1;
				acumuladorJabon=acumuladorJabon+cantidadUnidades;
				break;
		}

		cantidadProductosCargados=cantidadProductosCargados+1;
	}

	if(acumuladorJabon>acumuladorAlcohol&&acumuladorJabon>acumuladorBarbijos)
	{
		tipoConMasUnidades="El tipo de producto con mas unidades es jabon";
		promedio=acumuladorJabon/contadorJabon;
	}
	else
	{
		if(acumuladorBarbijos>acumuladorAlcohol)
		{
			tipoConMasUnidades="El tipo de producto con mas unidades es barbijo";
			promedio=acumuladorBarbijos/contadorBarbijos;
		}
		else
		{
			tipoConMasUnidades="El tipo de producto con mas unidades es alcohol";
			promedio=acumuladorAlcohol/contadorAlcohol;
		}
	}

	mensaje="Del alcohol mas barato hay "+alcoholMasBaratoUnidades+" unidades";
	mensaje=mensaje+" y lo fabrica "+alcoholMasBaratoFabricante+"\n";
	mensaje=mensaje+tipoConMasUnidades+" y su promedio de compra es "+promedio+"\n";
	mensaje=mensaje+"Hay "+acumuladorJabon+" unidades de jabon";
	console.log(mensaje);
}


/*

Autor: Juan Poux
Ejercicio: Parcial 2020 1 punto A, B y C
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
	var tipoDeProducto;
	var precio;
	var cantidadProductosCargados;
	var cantidadUnidades;
	var fabricante;
	var marca;
	var alcoholMasBaratoPrecio;
	var alcoholMasBaratoBandera;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var contadorBarbijos;
	var acumuladorBarbijos;
	var contadorJabon;
	var acumuladorJabon;
	var contadorAlcohol;
	var acumuladorAlcohol;
	var tipoConMasUnidades;
	var promedio;
	var mensaje;

	promedio=parseInt(promedio);
	cantidadUnidades=0;
	cantidadProductosCargados=0;
	alcoholMasBaratoBandera="primera vez";
	contadorJabon=0;
	parseInt(contadorJabon);
	contadorBarbijos=0;
	parseInt(contadorBarbijos);
	contadorAlcohol=0;
	parseInt(contadorAlcohol);
	acumuladorJabon=0;
	acumuladorJabon=parseInt(acumuladorJabon);
	acumuladorAlcohol=0;
	acumuladorAlcohol=parseInt(acumuladorAlcohol);
	acumuladorBarbijos=0;
	acumuladorBarbijos=parseInt(acumuladorBarbijos);
	masUnidadesBandera="Primera vez";

	while(cantidadProductosCargados<5)
	{
		tipoDeProducto=prompt("Ingrese el producto que desea cargar");
		
		while(tipoDeProducto!="alcohol"&&tipoDeProducto!="jabon"&&tipoDeProducto!="barbijo")
		{
			tipoDeProducto=prompt("Error, ingrese una opcion valida");
		}

		precio=prompt("Ingrese el precio del producto");
		precio=parseInt(precio);

		while(precio<100||precio>300)
		{
			precio=prompt("Error, ingrese un precio valido");
			precio=parseInt(precio);
		}
		

		cantidadUnidades=prompt("Ingrese la cantidad de unidades");
		cantidadUnidades=parseInt(cantidadUnidades);

		while(cantidadUnidades<1||cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("Error, ingrese un numero valido");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("Ingrese marca");
		fabricante=prompt("Ingrese fabricante");

		if(tipoDeProducto=="alcohol")
		{
			if(alcoholMasBaratoBandera=="primera vez")
			{
				alcoholMasBaratoBandera="segunda";

				alcoholMasBaratoPrecio=precio;
				alcoholMasBaratoUnidades=cantidadUnidades;
				alcoholMasBaratoFabricante=fabricante;
			}
			else
			{
				if(alcoholMasBaratoPrecio>precio)
				{
					alcoholMasBaratoPrecio=precio;
					alcoholMasBaratoUnidades=cantidadUnidades;
					alcoholMasBaratoFabricante=fabricante;
				}
			}
		}

		switch(tipoDeProducto)
		{
			case "barbijo":
				contadorBarbijos=contadorBarbijos+1;
				acumuladorBarbijos=acumuladorBarbijos+cantidadUnidades;
				break;
			case "alcohol":
				contadorAlcohol=contadorAlcohol+1;
				acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
				break;
			case "jabon":
				contadorJabon=contadorJabon+1;
				acumuladorJabon=acumuladorJabon+cantidadUnidades;
				break;
		}

		cantidadProductosCargados=cantidadProductosCargados+1;
	}

	if(acumuladorJabon>acumuladorAlcohol&&acumuladorJabon>acumuladorBarbijos)
	{
		tipoConMasUnidades="El tipo de producto con mas unidades es jabon";
		promedio=acumuladorJabon/contadorJabon;
	}
	else
	{
		if(acumuladorBarbijos>acumuladorAlcohol)
		{
			tipoConMasUnidades="El tipo de producto con mas unidades es barbijo";
			promedio=acumuladorBarbijos/contadorBarbijos;
		}
		else
		{
			tipoConMasUnidades="El tipo de producto con mas unidades es alcohol";
			promedio=acumuladorAlcohol/contadorAlcohol;
		}
	}

	mensaje="Del alcohol mas barato hay "+alcoholMasBaratoUnidades+" unidades";
	mensaje=mensaje+" y lo fabrica "+alcoholMasBaratoFabricante+"\n";
	mensaje=mensaje+tipoConMasUnidades+" y su promedio de compra es "+promedio+"\n";
	mensaje=mensaje+"Hay "+acumuladorJabon+" unidades de jabon";
	console.log(mensaje);
}*/
