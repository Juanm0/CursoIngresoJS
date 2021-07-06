/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	let primernumero;
	let segundonumero;
	let suma;
	primernumero = txtIdNumeroUno.value;
	segundonumero=txtIdNumeroDos.value;
	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);
	suma = primernumero + segundonumero;
	alert ("Su numero es: " + suma)
	
}

//txtIdNumeroUno
//txtIdNumeroDos
/* 
Entradas: dos numeros
Porcesos: realizar la suma de los 2 numeros
Salidas: la suma de los dos numeros */