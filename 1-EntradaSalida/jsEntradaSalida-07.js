/*Navarro Juan Ejercicio 7 Div H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	
	let PrimerNumero;
    let SegundoNumero;
	let suma;
	PrimerNumero = txtIdNumeroUno.value;
	SegundoNumero=txtIdNumeroDos.value;
	PrimerNumero=parseFloat(PrimerNumero);
	SegundoNumero=parseFloat(SegundoNumero);
	suma = PrimerNumero + SegundoNumero;
	alert ("Su numero es: " + suma);	
}

function restar()
{
	let PrimerNumero;
    let SegundoNumero;
	let resta;
	PrimerNumero = txtIdNumeroUno.value;
	SegundoNumero=txtIdNumeroDos.value;
	PrimerNumero=parseFloat(PrimerNumero);
	SegundoNumero=parseFloat(SegundoNumero);
	resta = PrimerNumero - SegundoNumero;
	alert ("Su numero es: " + resta);
}

function multiplicar()
{ 
	let PrimerNumero;
    let SegundoNumero;
	let multiplicacion;
	PrimerNumero = txtIdNumeroUno.value;
	SegundoNumero=txtIdNumeroDos.value;
	PrimerNumero=parseFloat(PrimerNumero);
	SegundoNumero=parseFloat(SegundoNumero);
	multiplicacion = PrimerNumero * SegundoNumero;
	alert ("Su numero es: " + multiplicacion);
}

function dividir()
{
	let PrimerNumero;
    let SegundoNumero;
	let division;
	PrimerNumero = txtIdNumeroUno.value;
	SegundoNumero=txtIdNumeroDos.value;
	PrimerNumero=parseFloat(PrimerNumero);
	SegundoNumero=parseFloat(SegundoNumero);
	division = PrimerNumero / SegundoNumero;
	alert ("Su numero es: " + division);
}

