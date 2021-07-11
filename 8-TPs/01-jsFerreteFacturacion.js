/*1.	Navarro Juan Div H TP Ejer. 1
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let sumaTotal;
	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	sumaTotal=(precioUno+precioDos+precioTres);
	sumaTotal=sumaTotal.toFixed(1);

	alert("La suma de los precios ingresados es igual a $"+sumaTotal+".");
	/*
	txtIdPrecioUno
	txtIdPrecioDos
	txtIdPrecioTres*/

}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let sumaPromedio;
	let promedioTotal;
	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	sumaPromedio=(precioUno+precioDos+precioTres);
	promedioTotal=sumaPromedio/3;
	promedioTotal=promedioTotal.toFixed(1);
	alert("El promedio de los tres precios es de $"+promedioTotal+".");
	/*
	txtIdPrecioUno
	txtIdPrecioDos
	txtIdPrecioTres*/
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let sumaPrecios;
	let precioFinal
	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	sumaPrecios=(precioUno+precioDos+precioTres);
	precioFinal=(sumaPrecios*0.21)+sumaPrecios;
	precioFinal=precioFinal.toFixed(1);

	alert("El precio total es igual a $"+precioFinal+" (IVA incluido).");
	/*
	txtIdPrecioUno
	txtIdPrecioDos
	txtIdPrecioTres*/
}