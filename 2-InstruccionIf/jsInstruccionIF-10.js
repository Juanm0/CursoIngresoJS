//    Navarro Juan Div H Ejer. 10 IF
/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random() * 11);
	alert("Su nota es "+nota);
	if(nota>8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota>3)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN