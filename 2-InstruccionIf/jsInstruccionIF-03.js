/*  Navarro Juan Div H Ejer. 3 IF
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad>=18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}
	/*txtIdEdad*/

}//FIN DE LA FUNCIÓN