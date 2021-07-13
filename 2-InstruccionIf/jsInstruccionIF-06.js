//   Navarro Juan Div H Ejer. 6 IF
/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad>12)
		{
			alert("Usted es un adolescente");
		}
		else
		{
			alert("Usted es un niñe");
		}
	}
	
//txtIdEdad
}//FIN DE LA FUNCIÓN