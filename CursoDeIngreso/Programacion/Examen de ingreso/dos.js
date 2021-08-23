//Navarro Juan Div H EXAMEN DE INGRESO EJERCICIO 2
/*
2.	
La empresa de cosmetica AVON necesita establecer un sistema de premios para las sucursales de  
distintas zonas de Bs As. Para ello, en base a distintas planillas que se cargan (pueden ser varias
planillas para la misma sucursal), se ingresan los siguientes datos:
  •	Sucursal (SUR, CABA, COSTA)
  •	Importe de la venta (número positivo NO menor que 5000)

  Al terminar de cargar las planillas, se debe calcular el total de ventas de cada sucursal. 
Si la sucursal logro superar los $2500000 en ventas tendra un premio del 10% que se repartira entre
los empleados de la sucursal, en caso contrario no tendran premio.

Mostrar:
a.	Para cada sucursal, el importe total de las ventas, cantidad de ventas y premio (si corresponde)
b.	La sucursal que obtuvo el mayor premio.  
*/
function mostrar()
{
  var planillas;
  var sucursalIngresada;
  var ventasSucursal;
  var acumuladorSUR;
  var acumuladorCABA;
  var acumuladorCOSTA;
  var contadorVentasCOSTA;
  var contadorVentasSUR;
  var contadorVentasCABA;
  var premioCABA;
  var premioSUR;
  var premioCOSTA;
  var sucursalMayorPremio;


  planillas=true;
  acumuladorCOSTA=0;
  acumuladorCABA=0;
  acumuladorSUR=0;
  contadorVentasCOSTA=0;
  contadorVentasCABA=0;
  contadorVentasSUR=0;
  premioCABA=0;
  premioSUR=0;
  premioCOSTA=0;
  while(planillas==true)
  {
    sucursalIngresada=prompt("Ingrese de onde es la sucursal")
    while(sucursalIngresada!="SUR"&&sucursalIngresada!="CABA"&&sucursalIngresada!="COSTA")
    {
      sucursalIngresada=prompt("Error..Ingrese una sucursal valida (SUR, CABA, COSTA)");
    }
    ventasSucursal=prompt("Ingrese Importe de ventas de la sucursal");
    ventasSucursal=parseInt(ventasSucursal);
    while(ventasSucursal<5000)
    {
      ventasSucursal=prompt("Error.. Ingrese un numero mayor a 5000");
      ventasSucursal=parseInt(ventasSucursal);
    }
    switch(sucursalIngresada)
    {
      case "COSTA":
      acumuladorCOSTA+=ventasSucursal;
      contadorVentasCOSTA++;
      if(acumuladorCOSTA>2500000)
        {
          premioCOSTA=acumuladorCOSTA+(acumuladorCOSTA*100/10);
        }
      break;

      case "CABA":
      acumuladorCABA+=ventasSucursal;
      contadorVentasCABA++;
      if(acumuladorCABA>2500000)
        {
          premioCABA=acumuladorCABA+(acumuladorCABA*100/10);
        }
      break;

      case "SUR":
      acumuladorSUR+=ventasSucursal;
      contadorVentasSUR++;
      if(acumuladorSUR>2500000)
        {
          premioSUR=acumuladorSUR+(acumuladorSUR*100/10);
        }
      break;
    }
    planillas=confirm("Agregar otra planilla?");
  }
  if(premioCABA>premioSUR&&premioCABA>premioCOSTA)
  {
    sucursalMayorPremio="La sucursal con el mayor premio es CABA";
  }
  else
  {
    if(premioSUR>premioCOSTA)
    {
      sucursalMayorPremio="La sucursal con el mayor premio es SUR";
    }
    else
    {
      sucursalMayorPremio="La sucursal con mayor premio es COSTA";
    }
  }
  document.write("El importe total de ventas para CABA es de "+acumuladorCABA+" con una cantidad de ventas de "+contadorVentasCABA+"con un premio de $"+premioCABA+"<br>");
  document.write("El importe total de ventas para SUR es de "+acumuladorSUR+" con una cantidad de ventas de "+contadorVentasSUR+"con un premio de $"+premioSUR+"<br>");
  document.write("El importe total de ventas para COSTA es de "+acumuladorCOSTA+" con una cantidad de ventas de "+contadorVentasCOSTA+"con un premio de $"+premioCOSTA+"<br>");
  document.write(sucursalMayorPremio);

  
}//FIN DEL EJERCICIO
