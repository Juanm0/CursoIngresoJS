/*3.	Navarro Juan Div H TP Ejer. 3
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosCe;
	var gradosFa;
	gradosFa=txtIdTemperatura.value;
	gradosFa=parseFloat(gradosFa);
	gradosCe=(gradosFa-32)*5/9;
	gradosCe=gradosCe.toFixed(2);
	alert(gradosFa+"°F es igual a "+gradosCe+"°C.");
	/*txtIdTemperatura*/
}

function CentigradosFahrenheit () 
{
	var gradosCe;
	var gradosFa;
	gradosCe=txtIdTemperatura.value;
	gradosCe=parseFloat(gradosCe);
	gradosFa=(gradosCe*9/5)+32;
	gradosFa=gradosFa.toFixed(2);
	alert(gradosCe+"°C es igual a "+gradosFa+"°F.");
	/*txtIdTemperatura*/
	
}
