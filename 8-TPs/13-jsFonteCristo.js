/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}
/*
function NumerosPrimos()
{
    var numeroIngresado;
    var bandera;//Bandera para saber si es primo
    var contador;//EL contador es 2 porque para que sea primo solo tiene que ser divisible por 1 y por si mismo
    var cantidadPrimos;
    var numeroMostrar; //El numero que voy amostrar desde donde itera

    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);
    bandera = true;
    contador = 2;
    cantidadPrimos = 0;
    cantidadPrimos = 0;
    
    while(isNaN(numeroIngresado) || numeroIngresado < 0 )
    {
        numeroIngresado = prompt("Error. Ingresa un numero mayor a 0");
        numeroIngresado = parseInt(numeroIngresado);
    }
    numeroMostrar = numeroIngresado;
    while(numeroIngresado>1)//Mientras  numero ingresado es mayor a 1 hago algo
    {                       //La condicion la voy  aromper restando numeroIngresado--
        while(contador < numeroIngresado && bandera == true)//Mientras contador que lo inicializo en 2 es menor al numeroIng 
        {                                                   //Y la bandera es true voy a averiguar si es primo.            
            if(numeroIngresado % contador == 0)
            {
                bandera = false;//Si entra aca ya se que no es primo, por lo tanto pongo la bandera en false y rompo la sentencia
            }
            else
            {
                contador++;//Y sino sumo el contador para analizar si es divisible por 3 y asi sucesivamente
            }
            
            
        }
        if(bandera == true) //Si Llego aca quiere decir que ya se rompio la primer condicion
        {                   //Y si la bandera es true es porque es solo divisible por 1 y si mismo.
                            //por lo tanto es primo
            cantidadPrimos++;

        } 
        else
        {
            bandera = true; //Y si llego aca es porque la bandera esta en false y es primo, la paso a true de vuelta.
                            //Para analizar el proximo caso
        }
        numeroIngresado--//Resto el numero ingresado, para analizarlo y para en un momento romper la primer condicion
        contador= 2; //Como el contador me suma para saber si es primo lo vuelvo a inciar en 2
    }
    alert("Cantidad de numeros primos desde el " + numeroMostrar  + " al numero 0 es: "  +cantidadPrimos );

}
