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

    edadIngresada=prompt("Ingrese su edad");
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










/*
meza maximiliano div h
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.  Edad, entre 18 y 90 años inclusive.
B.  Sexo, “M” para masculino y “F” para femenino
C.  Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.  Sueldo bruto, no menor a 8000.
E.  Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.  Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 
function ComenzarIngreso () 
{
    var edadIngresado;
    var seguir;
    var sexoIngresado;
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;

    seguir = true;

    edadIngresado = prompt("ingrese su edad: ");
    edadIngresado = parseInt(edadIngresado);
    while(seguir == true)
    {
        while(edadIngresado < 18 || edadIngresado > 99)
        {
            edadIngresado = prompt("error... ingrese una edad entre 18 y 99 años: ");
        }


        sexoIngresado = prompt("ingrese su sexo: “m” para masculino y “f” para femenino");
        while(sexoIngresado != "m" && sexoIngresado != "f")
        {
            sexoIngresado = prompt("error.. ingrese nuevamente el sexo: m o f");
        }
        if(sexoIngresado == "m")
        {
            sexoIngresado = "masculino";
        } 
        else
        {
            if(sexoIngresado == "f")
            {
                sexoIngresado == "femenino";
            }
        }


        estadoCivil = prompt("ingrese su estado civil: soltero, casado, divorciado o viudes.");
        while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudes")
        {
            estadoCivil = prompt("error.. ingrese su estado civil: soltero, casado, divorciado o viudes.")
        }


        sueldo = prompt("ingrese el sueldo bruto: ");
        sueldo = parseInt(sueldo);
        while(sueldo < 8000)
        {
            sueldo = prompt("el sueldo bruto no puede ser menor a 8.000: ");
        }


        legajo = prompt("ingrese su legajo: ");
        legajo = parseInt(legajo);
        while(legajo < 1000 || legajo > 9999)
        {
            legajo = prompt("error... ingrese su legajo");
        }


        nacionalidad = prompt("ingrese su nacionalidad: “a” para argentinos, “e” para extranjeros, “n” para nacionalizados");
        while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
        {
            nacionalidad = prompt("error... ingrese su nacionalidad: “a” para argentinos, “e” para extranjeros, “n” para nacionalizados");
        }
        if(nacionalidad == "a")
        {
            nacionalidad = "Argentino";
        }
        else
        {
            if(nacionalidad == "e")
            {
                nacionalidad = "Extranjero";
            }
            else
            {
                nacionalidad = "Nacionalizado";
            }
        }


        seguir = confirm("desea agregar datos nuevos?");
    }

    txtIdEdad.value = edadIngresado;
    txtIdSexo.value = sexoIngresado;
    txtIdEstadoCivil.value = estadoCivil;
    txtIdSueldo.value = sueldo;
    txtIdLegajo.value = legajo;
    txtIdNacionalidad.value = nacionalidad;
}*/
