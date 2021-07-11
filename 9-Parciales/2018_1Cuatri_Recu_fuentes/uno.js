/* Navarro Juan Div H Ejer. 1 parcial 2018 recu
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
var ancho;
var largo;
var perimetro;
ancho=prompt("Ingrese el ancho del rectángulo");
largo=prompt("Ingrese el largo del rectángulo");
ancho=parseFloat(ancho);
largo=parseFloat(largo);
perimetro=(largo*2)+(ancho*2);
perimetro=perimetro.toFixed(1);
alert("Perímetro: "+perimetro+".")
}
