// Navarro Juan Div H Ejer. 7 IF
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	//tomo la edad  
	var edad;
	var estado;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=estadoCivil.value;
/*  Si eliminamos la variante "estado", podemos resolver
	el ejercicio poniendo estadoCivil.value!="Soltero"   */
	if(edad<18&&estado!="Soltero")
	{
		alert("Usted es muy pequeño para NO ser soltero.");
	}
	
//txtIdEdad
//estadoCivil
}//FIN DE LA FUNCIÓN