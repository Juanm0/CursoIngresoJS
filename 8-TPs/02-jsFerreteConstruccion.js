/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largoTerreno;
var anchoTerreno;
var cantidadAlambre;
var AREA;
largoTerreno=prompt("Ingrese largo del terreno");
anchoTerreno=prompt("Ingrese ancho del terreno");
largoTerreno=parseFloat(largoTerreno);
anchoTerreno=parseFloat(anchoTerreno);
AREA=largoTerreno*anchoTerreno;
cantidadAlambre=(largoTerreno*anchoTerreno)*3;
document.getElementById("txtIdLargo").value="Se deben utilizar "+cantidadAlambre+" metros de alambre.";



/*txtIdLargo*/

}
function Circulo () 
{
	var radio;
	var diametro;
	var alambreTotal;
	radio=prompt("Ingrese el Radio del terreno");
	radio=parseFloat(radio);
	diametro=radio*2;
	alambreTotal=diametro*3;
	txtIdAncho.value= "Se deben utilizar "+alambreTotal+" metros de alambre para su terreno circular."

	/*txtIdAncho*/
}
function Materiales () 
{
	var AREA;
    let metrosCuadrados;
    var cemento;
    var cal;
    metrosCuadrados=AREA;
    metrosCuadrados=parseFloat(metrosCuadrados);
    cemento=metrosCuadrados*2;
    cal=metrosCuadrados*3;
    document.getElementById("txtIdRadio").value ="Para su terreno se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal."
	/*txtIdRadio*/
}