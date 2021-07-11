/*2.    Navarro Juan Div H TP Ejer. 2 
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var anchoTerreno;
	var largoTerreno;
	var sumaAlambre;
	var alambreTotal;
	anchoTerreno=txtIdLargo.value;
	largoTerreno=txtIdAncho.value;
	anchoTerreno=parseFloat(anchoTerreno);
	largoTerreno=parseFloat(largoTerreno);
	sumaAlambre=anchoTerreno*largoTerreno;
	alambreTotal=(anchoTerreno*6)+(largoTerreno*6);
	sumaAlambre=sumaAlambre.toFixed(1);
	alambreTotal=alambreTotal.toFixed(1);
	alert("La cantidad de alambre que necesita para su terreno de "+sumaAlambre+"m2,"+" es de "+alambreTotal+" metros.")


/*
txtIdAncho
txtIdLargo*/

}
function Circulo () 
{
	var radio;
	var diametro;
	var perimetro;
	var alambreTotal;
	radio=txtIdRadio.value;
	radio=parseFloat(radio);
	diametro=radio*2;
	perimetro=diametro*(3.14159265359);
	alambreTotal=perimetro*3;
	alambreTotal=alambreTotal.toFixed(2);
	alert("La cantidad de alambre necesaria para su terreno circular es de "+alambreTotal+" metros.")
	/*txtIdRadio
	*/
}
function Materiales () 
{
	var areaTerreno;
	var anchoTerreno;
	var largoTerreno;
	var cemento;
	var cal;
	anchoTerreno=txtIdAncho.value;
	largoTerreno=txtIdLargo.value;
	anchoTerreno=parseFloat(anchoTerreno);
	largoTerreno=parseFloat(largoTerreno);
	areaTerreno=anchoTerreno*largoTerreno;
	cemento=areaTerreno*2;
	cal=areaTerreno*3;
	cemento=cemento.toFixed(1);
	cal=cal.toFixed(1);
	alert("Para su terreno de "+areaTerreno+"m2, usted necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.")

	
	/*txtIdAncho
	  txtIdLargo*/
}