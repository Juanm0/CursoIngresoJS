/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var sueldoIngresado;
    //acumuladores y contadores inicializar en 0

    edadIngresada=prompt("Ingrese su edad");
    edadIngresada=parseInt(edadIngresada);

    while(isNaN(edadIngresada)||edadIngresada<18||edadIngresada>90)
    {
        edadIngresada=prompt("Error.. Ingrese una edad valida (entre 18 y 90 años)");
        edadIngresada=parseInt(edadIngresada);
    }
    txtIdEdad.value=edadIngresada;
    
    sexoIngresado=prompt("Ingrese su sexo (f o m).");

    while(sexoIngresado!="f"&&sexoIngresado!="m")
    {
        sexoIngresado=prompt("Error.. Ingrese un sexo valido (f o m)");
    }
    if(sexoIngresado=="m")
    {
        sexoIngresado="Masculino";
    }
    else
    {
        sexoIngresado="Femenino";
    }
    txtIdSexo.value=sexoIngresado;

    estadoCivilIngresado=prompt("Ingrese su estado civil (escriba el numero): 1-(Soltero/a), 2-(Casado/a), 3-(Divorciado/a) y 4-(Viudo/a)");
    while(estadoCivilIngresado!="1"&&estadoCivilIngresado!="2"&&estadoCivilIngresado!="3"&&estadoCivilIngresado!="4")
    {
        estadoCivilIngresado=prompt("Error.. Ingrese un estado civil valido: 1-(Soltero/a), 2-(Casado/a), 3-(Divorciado/a) y 4-(Viudo/a)");
    }
    if(estadoCivilIngresado=="1")
    {
        estadoCivilIngresado="Soltero/a";
    }
    else
    {
        if(estadoCivilIngresado=="2")
        {
            estadoCivilIngresado="Casado/a";
        }
        else
        {
            if (estadoCivilIngresado=="3")
            {
                estadoCivilIngresado="Divorciado/a";
            }
            else
            {
                estadoCivilIngresado="Viudo/a";
            }
        }
    }
    txtIdEstadoCivil.value=estadoCivilIngresado;

    sueldoIngresado=prompt("Ingrese su sueldo bruto");
    sueldoIngresado=parseInt(sueldoIngresado);
    while(sueldoIngresado<8000)
    {
        sueldoIngresado=prompt("Error.. Ingrese un sueldo bruto no menor a 8000");
    }
    txtIdSueldo.value=sueldoIngresado;
}
//txtIdEdad
//txtIdSexo
//txtIdEstadoCivil
//txtIdSueldo