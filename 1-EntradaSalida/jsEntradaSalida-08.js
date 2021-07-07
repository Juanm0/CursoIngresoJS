/*Navarro Juan Ejercicio 8 Div H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let PrimerNumero;
    let SegundoNumero;
	let division;
	PrimerNumero = txtIdNumeroDividendo.value;
	SegundoNumero=txtIdNumeroDivisor.value;
	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);
	division = PrimerNumero % SegundoNumero;
	alert ("El resto es: " + division);
    //txtIdNumeroDividendo
	//txtIdNumeroDivisor

}
