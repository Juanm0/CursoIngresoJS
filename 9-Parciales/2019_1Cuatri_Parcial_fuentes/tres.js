/*Navarro Juan Ejercicio 3 parcial 2019 Div H*/
function mostrar()
{
let precio;
let descuentoPorcentaje;
let precioFinal;
precio=prompt("Ingresar precio");
descuentoPorcentaje=prompt("Ingrese descuento a aplicar");
precio=parseFloat(precio);
descuentoPorcentaje=parseFloat(descuentoPorcentaje);
precioFinal=precio-(precio*descuentoPorcentaje/100);
document.getElementById("elPrecioFinal").value=precioFinal;

}

/*elPrecioFinal.value*/

