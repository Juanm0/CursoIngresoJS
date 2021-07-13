// Navarro Juan Div H Ejer. 5 IF
/*Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
function mostrar()
{
	//tomo la edad  
    var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad<13||edad>17)
	{
		alert("Usted NO es adolescente")
	}
//txtIdEdad
}//FIN DE LA FUNCIÓN