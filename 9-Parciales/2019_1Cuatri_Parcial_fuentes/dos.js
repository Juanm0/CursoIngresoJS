/*Navarro Juan Div H Ejercicio 2 Parcial 2019*/
function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  nombre1 = prompt ("Nombre de la primera persona: ");
  peso1 = prompt ("Hola " + nombre1+ ", ¿Cual es su peso? ");
  peso1 = parseFloat(peso1)
  nombre2 = prompt ("Nombre de la segunda persona");
  peso2 = prompt ("Hola "+nombre2+", ¿Cual es su peso?" );
  peso2 = parseFloat(peso2);
  sumapesos = peso1 + peso2;
  sumapesos=sumapesos.toFixed(1);
  promediopesos = (sumapesos / 2);

  alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ", pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + sumapesos + " kilos y el promedio de peso es " + promediopesos + ".");

}
