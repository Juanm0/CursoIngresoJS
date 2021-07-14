//    Navarro Juan Div H Ejer. 8 IF
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	//tomo la edad  
	var edad;
	var estado;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=estadoCivil.value;
	if(edad>17&&estado=="Soltero")
	{
		alert("Usted es soltero y no es menor")
	}
	

/*txtIdEdad
  estadoCivil*/
}//FIN DE LA FUNCIÓN