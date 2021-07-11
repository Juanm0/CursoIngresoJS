/* Navarro Juan Div H Ejer. 3 parcial 2018 RECUPERATORIO
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar()
{
	let precioInicial;
	let descuento;
	let precioFinal;
	let descuentoCalculo;
	precioInicial=prompt("Ingrese el precio.");
	descuento=prompt("Ingrese el valor del descuento (sólo números, sin simbolos).");
	precioInicial=parseFloat(precioInicial);
	descuento=parseFloat(descuento);
	descuentoCalculo=(precioInicial*descuento)/100;
	precioFinal=precioInicial-descuentoCalculo;
	precioFinal=precioFinal.toFixed(2);
	elPrecioFinal.value="$"+precioFinal;


/*elPrecioFinal*/
}
