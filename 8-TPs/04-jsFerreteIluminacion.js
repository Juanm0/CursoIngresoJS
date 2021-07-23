//  Navarro Juan TP EJERCICIO 4 IF
/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioFinal;
    var marcas;
    var calculoIIBB;
    var descuento;
    var PrecioFinalTotal;
    cantidadLamparas=txtIdCantidad.value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcas=Marca.value;
    precioFinal=cantidadLamparas*35;
    descuento=0;

    //asignas de derecha a izquierda
    //calculoIIBB=txtIdprecioDescuento.value;


    

    if(cantidadLamparas>5)//A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
    {
        descuento=0.5;
    }
    else//B.    Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %,
    {//y si es de otra marca el descuento es del 30%.
        if(cantidadLamparas==5)
        {
            if(marcas=="ArgentinaLuz")
            {
                descuento=0.4;
            }
            else
            {
                descuento=0.3;
            }
        }
        else//C.Si compra 4 "ArgentinaLuz" o “FelipeLamparas” descuento del 25 % y otra marca el descuento es del 20%.
        {
            if (cantidadLamparas==4)
            {
                if(marcas=="ArgentinaLuz"||marcas=="FelipeLamparas")
                {
                    descuento=0.25;
                }
                else
                {
                    descuento=0.2;
                }
            }
            if (cantidadLamparas==3)//D.Si compra 3 "ArgentinaLuz" descuento del 15%,si es “FelipeLamparas” descuento del 10 % y si es de otra marca un 5%. 
            {
                if (marcas=="ArgentinaLuz") 
                {
                    descuento=0.15;
                }
                else
                {
                    if(marcas=="FelipeLamparas")
                    {
                        descuento=0.1;
                    }
                    else
                    {
                        descuento=0.05;
                    }
                }
            }
            
            
        }

    }
    
    PrecioFinalTotal=precioFinal-(precioFinal*descuento);
    
    if(PrecioFinalTotal>120)
    {
        calculoIIBB=PrecioFinalTotal*0.10;
        PrecioFinalTotal=PrecioFinalTotal+calculoIIBB;
        alert("Usted pagó "+calculoIIBB+" de Ingresos Brutos.")
    }
    txtIdprecioDescuento.value=PrecioFinalTotal;
//Marca
//txtIdCantidad
//txtIdprecioDescuento
}
