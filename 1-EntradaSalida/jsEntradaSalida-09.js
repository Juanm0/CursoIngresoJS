/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let Sueldo;
    let Resultado;
	
	Sueldo = txtIdSueldo.value;
	Sueldo=parseInt(Sueldo);
	Resultado=Sueldo * (0.1) + Sueldo;
	txtIdResultado.value = Resultado;
	
	
    //txtIdSueldo
	//txtIdResultado
}
