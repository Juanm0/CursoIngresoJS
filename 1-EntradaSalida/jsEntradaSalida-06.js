/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var primernumero
	var segundonumero
	var suma
	document.getElementById ("txtIdNumeroUno").value = primernumero
	document.getElementById ("txtIdNumeroDos").value = segundonumero
	suma = parseInt (primernumero + segundonumero)
	alert ("Su numero es: " + suma)
	//txtIdNumeroUno
	//txtIdNumeroDos
}

