//Navarro Juan Div H, Parcial 2020
/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  let agregarProducto;
  let tipoDeProducto;
  let cantidadBolsas;
  let precioPorBolsa;
  let acumuladorBolsas;
  let pagoTotal;
  let descuento;
  let precioArena;
  let precioCal;
  let precioCemento;
  let precioFinal;
  let bolsasArena;
  let bolsasCal;
  let bolsasCemento;
  let tipoConMasBolsas;
  let banderaMasBolsas;
  let tipoMasCaro;
  let banderaTipoMasCaro;

  agregarProducto=true;
  acumuladorBolsas=0;
  precioArena=0;
  precioCal=0;
  precioCemento=0;
  descuento=0;
  bolsasArena=0;
  bolsasCal=0;
  bolsasCemento=0;
  banderaMasBolsas=true;
  banderaTipoMasCaro=true;

  while(agregarProducto==true)
  {
    tipoDeProducto=prompt("Ingrese el producto");
    while(tipoDeProducto!="arena"&&tipoDeProducto!="cal"&&tipoDeProducto!="cemento")
    {
      tipoDeProducto=prompt("Error.. Ingrese un producto valido (arena, cal o cemento)");
    }
    cantidadBolsas=prompt("Cuantas bolsas de "+tipoDeProducto+" quiere?");
    cantidadBolsas=parseInt(cantidadBolsas);
    while(cantidadBolsas<1)
    {
      cantidadBolsas=prompt("Error.. Ingrese una cantidad valida");
      cantidadBolsas=parseInt(cantidadBolsas);
    }
    precioPorBolsa=prompt("Que precio por unidad tiene su bolsa de "+tipoDeProducto+"?");
    precioPorBolsa=parseInt(precioPorBolsa);
    while(precioPorBolsa<1)
    {
      precioPorBolsa=prompt("Error.. Agregue un precio mayor a 0");
      precioPorBolsa=parseInt(precioPorBolsa);
    }
    acumuladorBolsas=acumuladorBolsas+cantidadBolsas;
    switch(tipoDeProducto)
    {
      case "arena":
      precioArena=precioArena+(precioPorBolsa*cantidadBolsas);
      bolsasArena=bolsasArena+cantidadBolsas;
      break;

      case "cal":
      precioCal=precioCal+(precioPorBolsa*cantidadBolsas);
      bolsasCal+=cantidadBolsas;
      break;

      default:
      precioCemento=precioCemento+(precioPorBolsa*cantidadBolsas);
      bolsasCemento+=cantidadBolsas;
      break;
    }
    precioFinal=precioArena+precioCal+precioCemento;
    agregarProducto=confirm("Quiere agregar otro producto?");
  }
  if(bolsasArena>bolsasCemento&&bolsasArena>bolsasCal&&banderaMasBolsas==true)
  {
    tipoConMasBolsas="El tipo con mas bolsas es la Arena con "+bolsasArena+" bolsas.";
    banderaMasBolsas=false;
  }
  else
  {
    if(bolsasCemento>bolsasCal&&banderaMasBolsas==true)
    {
      tipoConMasBolsas="El tipo con mas bolsas es el Cemento con "+bolsasCemento+ " bolsas.";
      banderaMasBolsas=false;
    }
    else
    {
      tipoConMasBolsas="El tipo con mas bolsas es la Cal con "+bolsasCal+" bolsas.";
      banderaMasBolsas=false;
    }
  }
  if(precioArena>precioCal&&precioArena>precioCemento&&banderaTipoMasCaro==true)
  {
    tipoMasCaro="El tipo mas caro es la Arena con un precio de "+precioArena;
    banderaTipoMasCaro=false;
  }
  else
  {
    if(precioCal>precioArena&&precioCal>precioCemento&&banderaTipoMasCaro==true)
    {
      tipoMasCaro="El tipo mas caro es la Cal con un precio de "+precioCal;
      banderaTipoMasCaro=false;
    }
    else
    {
      tipoMasCaro="El tipo mas caro es el Cemento con un precio de "+precioCemento;
      banderaTipoMasCaro=false;
    }
  }
  if(acumuladorBolsas>10&&acumuladorBolsas<31)
  {
    descuento=0.15;
  }
  else
  {
    if(acumuladorBolsas>30)
    {
      descuento=0.25;
    }
  }
  pagoTotal=precioFinal-(precioFinal*descuento);
  document.write("El precio total es $"+precioFinal+"<br>");
  document.write("El descuento aplicado es de "+descuento+"% <br>");
  document.write("Por lo tanto el precio final es $"+pagoTotal+"<br>");
  document.write(tipoConMasBolsas+"<br>");
  document.write(tipoMasCaro+"<br>");
}//FIN DEL EJERCICIO



