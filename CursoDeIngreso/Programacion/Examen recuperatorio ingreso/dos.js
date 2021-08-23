//NAVARRO JUAN DIV H RECUPERATORIO EJERCICIO 2
/*
2. El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-Nacionalidad ("argentina", "extranjero")
-Resultado ("positivo", "negativo")
-Edad (entre 18 y 65)
-Cepa("Delta", "Alfa", "Beta", "Ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a-	Porcentaje de positivos 
b-	Porcentaje de negativos
c-	Cuál es la cepa menos encontrada
d-	Edad del menor argentino contagiado
e-	Cantidad de personas extranjeras contagiadas con la delta
*/

function mostrar()
{
  var i;
  var nacionalidadIngresada;
  var resultadoIngresado;
  var edadIngresada;
  var cepaIngresada;
  var contadorPositivos;
  var contadorNegativos;
  var porcentajePositivos;
  var porcentajeNegativos;
  var contadorAlfa;
  var contadorBeta;
  var contadorDelta;
  var edadArgentino;
  var banderaArgentino;
  var contadorExtranjeroDelta;

  i=0;
  contadorPositivos=0;
  contadorNegativos=0;
  contadorAlfa=0;
  contadorBeta=0;
  contadorDelta=0;
  contadorExtranjeroDelta=0;
  banderaArgentino=true;
  while(i<8)
  {
    nacionalidadIngresada=prompt("Ingrese su nacionalidad");
    while(nacionalidadIngresada!="argentina"&&nacionalidadIngresada!="extranjero")
    {
      nacionalidadIngresada=prompt("error.. Ingrese (argentina o extranjero)");
    }
    resultadoIngresado=prompt("Ingrese el resultado");
    while(resultadoIngresado!="positivo"&&resultadoIngresado!="negativo")
    {
      resultadoIngresado=prompt("Error.. Ingrese positivo o negativo");
    }
    edadIngresada=prompt("Ingrese su edad");
    edadIngresada=parseInt(edadIngresada);
    while(edadIngresada<18||edadIngresada>65||isNaN(edadIngresada))//Hice pequeña correccion a la validacion de la edad
    {
      edadIngresada=prompt("Error.. Ingrese una edad entre 18 y 65");
      edadIngresada=parseInt(edadIngresada);
    }
    cepaIngresada=prompt("Ingrese cepa");
    while(cepaIngresada!="alfa"&&cepaIngresada!="beta"&&cepaIngresada!="delta"&&cepaIngresada!="ninguna")
    {
      cepaIngresada=prompt("Error.. Ingrese alfa, beta, delta o ninguna");
    }
    while(resultadoIngresado=="positivo"&&cepaIngresada=="ninguna")
    {
      alert("Error..Si su hisopado fue positivo, no puede tener ninguna cepa");
      cepaIngresada=prompt("Ingrese su cepa");
    }
    switch(resultadoIngresado)
    {
      case "positivo":
      contadorPositivos++;
      if(nacionalidadIngresada=="argentina")//D
      {
        if(edadIngresada<edadArgentino||banderaArgentino)
        {
          edadArgentino=edadIngresada;
          banderaArgentino=false;
        }
      }
      break;

      case "negativo":
      contadorNegativos++;
      break;
    }
    switch(cepaIngresada)
    {
      case "alfa":
      contadorAlfa++;
      break;

      case "delta":
      contadorDelta++;
      if(nacionalidadIngresada=="extranjero")//E
      {
        contadorExtranjeroDelta++;
      }
      break;

      case "beta":
      contadorBeta++;
      break;
    }
  }//FIN DEL WHILE
  if(contadorDelta<contadorBeta&&contadorDelta<contadorAlfa)//C
  {
    document.write("La cepa menos encontrada es la DELTA <br>");
  }
  else
  {
    if (contadorBeta<contadorAlfa)
    {
      document.write("La cepa menos encontrada es la BETA <br>");
    }
    else
    {
      document.write("La cepa menos encontrada es la ALFA <br>");
    }
  }

  porcentajePositivos=contadorPositivos*100/8;//A
  porcentajeNegativos=contadorNegativos*100/8;//B
  document.write("El porcentaje de positivos es de "+porcentajePositivos+"% y el porcentaje de negativos es de "+porcentajeNegativos+"% <br>"+
  "La edad del menor argentino contagiado es de "+edadArgentino+" años <br>"+
  "La cantidad de personas extranjeras contagiadas con la delta es de "+contadorExtranjeroDelta);

}//FIN DEL EJERCICIO

