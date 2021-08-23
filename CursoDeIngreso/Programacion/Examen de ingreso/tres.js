// Navarro Juan Div H EJERCICIO 3
/*
3.	
De los 15 empleados de una PYME se ingresan los siguientes datos:
•	Nombre y apellido
•	Genero del empleado ("Femenino", "Masculino", "No Binario")
•	Cantidad de hijos (no puede ser un numero negativo)

El programa deberá mostrar:
	a.	El nombre del empleado Masculino con mas cantidad de hijos.
	b.	Nombre y apellido del primer empleado No Binario que no tiene hijos.

Sabiendo que: 
   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 3000
   *Si tiene dos hijos le corresponde 5000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 8000

	c.	Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
	d.	En caso de que el total de asignaciones supere los 500000, el Gobierno Nacional asistirá a la PYME 
subvencionando el 10% de las asignaciones. Mostrar el valor de la subvención si corresponde.
*/
function mostrar()
{
	var ingresarEmpleado;
	var nombreEmpleado;
	var generoEmpleado;
	var cantidadHijos;
	var empleadoConMasHijos;
	var banderaMasHijos;
	var maximoHijos;
	var PrimerNBsinHijos;

	ingresarEmpleado=0;
	banderaMasHijos=true;
	while(ingresarEmpleado<15)
	{
		ingresarEmpleado++;
		nombreEmpleado=prompt("Ingrese su nombre y apellido");
		generoEmpleado=prompt("Ingrese su genero");
		while(generoEmpleado!="Femenino"&&generoEmpleado!="Masculino"&&generoEmpleado!="No Binario")
		{
			generoEmpleado=prompt("Error.. Ingrese un genero valido (Femenino, Masculino o No Binario");
		}
		cantidadHijos=prompt("Cuantos hijos tiene?");
		cantidadHijos=parseInt(cantidadHijos);
		while(cantidadHijos<0)
		{
			cantidadHijos=prompt("Usted no puede tener una cantidad negativa de hijos");
		}
		if(cantidadHijos>maximoHijos||banderaMasHijos==true)
		{
			maximoHijos=cantidadHijos;
			empleadoConMasHijos=nombreIngresado;
			banderaMasHijos=false;
		}
		if(generoEmpleado=="No Binario"&&cantidadHijos==0)
		{
			PrimerNBsinHijos=nombreIngresado;
		}
	}
	document.write("El empleado con mas hijos es "+empleadoConMasHijos+"<br>");
	document.write("El primer No binario sin hijos es "+PrimerNBsinHijos+"<br>");
}//FIN DEL EJERCICIO
