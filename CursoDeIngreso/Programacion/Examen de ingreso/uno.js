// Navarro Juan Div H EXAMEN DE INGRESO EJERCICIO 1
/*
1.	
Se ingresan 10 notas, nombre del alumno y materia (Matematica, Lectura o Programación).
Calcular y mostrar:
   a.	Minima nota con el nombre del alumno
   b.	La materia con maxima nota.
   c.	Promedio de notas para lectura.
   d.	Porcentaje de alumnos que rindio cada materia.
*/
function mostrar()
{
	var cantidadNotas;
   var nombreAlumno;
   var materiaIngresada;
   var notaIngresada;
   var banderaMinimaNota;
   var minimaNota;
   var alumnoConMinimaNota;
   var banderaMateriaMaximaNota;
   var MateriaMaximaNota;
   var maximaNota;
   var acumuladorLectura;
   var contadorLectura;
   var promedioNotasLectura;
   var contadorAlumnosLectura;
   var contadorAlumnosMatematica;
   var contadorAlumnosProgramacion;
   var cantidadTotalAlumnos;
   var porcentajeAlumnosLectura;
   var porcentajeAlumnosMatematica;
   var porcentajeAlumnosProgramacion;

   cantidadNotas=0;
   banderaMinimaNota=true;
   banderaMateriaMaximaNota=true;
   acumuladorLectura=0;
   contadorLectura=0;
   promedioNotasLectura=0;
   contadorAlumnosLectura=0;
   contadorAlumnosProgramacion=0;
   contadorAlumnosMatematica=0;
   cantidadTotalAlumnos=0;
   porcentajeAlumnosLectura=0;
   porcentajeAlumnosProgramacion=0;
   porcentajeAlumnosMatematica=0;
   while(cantidadNotas<10)
   {
      cantidadNotas++;
      nombreAlumno=prompt("Ingrese su nombre");
      materiaIngresada=prompt("Ingrese materia");
      while(materiaIngresada!="Matematica"&&materiaIngresada!="Lectura"&&materiaIngresada!="Programacion")
      {
         materiaIngresada=prompt("Error.. Ingrese una materia valida (Matematica, Lectura o Programación)");
      }
      notaIngresada=prompt("Ingrese su nota");
      notaIngresada=parseInt(notaIngresada);
      if(notaIngresada<minimaNota||banderaMinimaNota==true)
      {
         minimaNota=notaIngresada;
         alumnoConMinimaNota=nombreIngresado;
         banderaMinimaNota=false;
      }
      if(notaIngresada>maximaNota||banderaMateriaMaximaNota==true)
      {
         maximaNota=notaIngresada;
         MateriaMaximaNota=materiaIngresada;
         banderaMateriaMaximaNota=false;
      }
      switch(materiaIngresada)
      {
         case "Lectura":
         acumuladorLectura+=notaIngresada;
         contadorLectura++;
         contadorAlumnosLectura++;
         break;

         case "Matematica":
         contadorAlumnosMatematica++;
         break;

         case "Programación":
         contadorAlumnosProgramacion++;
         break;
      }
   }
   promedioNotasLectura=acumuladorLectura/contadorLectura;
   cantidadTotalAlumnos=contadorAlumnosProgramacion+contadorAlumnosLectura+contadorAlumnosMatematica;
   porcentajeAlumnosLectura=contadorAlumnosLectura*100/cantidadTotalAlumnos;
   porcentajeAlumnosMatematica=contadorAlumnosMatematica*100/cantidadTotalAlumnos;
   porcentajeAlumnosProgramacion=contadorAlumnosProgramacion*100/cantidadTotalAlumnos;
   document.write("La minima nota es un "+minimaNota+" del alumno "+alumnoConMinimaNota+"<br>");
   document.write("La materia la nota maxima es "+MateriaMaximaNota+"<br>");
   document.write("El promedio de notas para lectura es "+promedioNotasLectura+"<br>");
   document.write("El porcentaje de alumnos que rindio Lectura es del "+porcentajeAlumnosLectura+"% <br>");
   document.write("El porcentaje de alumnos que rindio Matematica es del "+porcentajeAlumnosMatematica+"% <br>");
   document.write("El porcentaje de alumnos que rindio Programación es del "+porcentajeAlumnosProgramacion+"% <br>");
}//FIN DEL EJERCICIO
