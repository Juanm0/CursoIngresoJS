/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
    var precioFinal;
    var marcas;
    cantidadLamparas=txtIdCantidad.value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcas=Marca.value;
    precioFinal=cantidadLamparas*35;
    txtIdprecioDescuento.value=precioFinal//asignas de derecha a izquierda
    if(cantidadLamparas>5)
    {
        txtIdprecioDescuento.value=precioFinal/2;
    }
    else
    {
        if(cantidadLamparas==5)
        {
            if(marcas=="ArgentinaLuz")
                {
                    txtIdprecioDescuento.value=precioFinal-(precioFinal*40/100);
                }
                else
                {
                    if(marcas!="ArgentinaLuz")
                    {
                        txtIdprecioDescuento.value=precioFinal-(precioFinal*30/100);
                    }
                }
        }
        /*else
        {
            if(cantidadLamparas==5&&marcas!="ArgentinaLuz")
            {
                txtIdprecioDescuento.value=precioFinal*0.3;
            }
            else
            {
                if(cantidadLamparas==4&&marcas=="ArgentinaLuz"||marcas=="FelipeLamparas")
                {
                    txtIdprecioDescuento.value=precioFinal*0.25;
                }
                else
                {
                    if(cantidadLamparas==4&&marcas!="ArgentinaLuz"&&marcas!="FelipeLamparas")
                    {
                        txtIdprecioDescuento.value=precioFinal*0.20;
                    }
                    else//D. Si compra 3 marca "ArgentinaLuz" el descuento es del 15%
                        if(cantidadLamparas==3&&marcas=="ArgentinaLuz")
                        {
                            txtIdprecioDescuento.value=precioFinal*0.15;
                        }
                }
            }
        }*/
    }
//Marca
//txtIdCantidad
//txtIdprecioDescuento
}
