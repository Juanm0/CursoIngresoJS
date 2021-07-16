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
    var calculoIIBB
    cantidadLamparas=txtIdCantidad.value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcas=Marca.value;
    precioFinal=cantidadLamparas*35;
    txtIdprecioDescuento.value=precioFinal;//asignas de derecha a izquierda
    

    if(cantidadLamparas>5)//A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
    {
        txtIdprecioDescuento.value=precioFinal-(precioFinal*50/100);
    }
    else//B.    Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %,
    {//y si es de otra marca el descuento es del 30%.
        if(cantidadLamparas==5)
        {
            if(marcas=="ArgentinaLuz")
            {
                txtIdprecioDescuento.value=precioFinal-(precioFinal*40/100);
            }
            else
            {
                txtIdprecioDescuento.value=precioFinal-(precioFinal*30/100);
            }
        }//C.Si compra 4 "ArgentinaLuz" o “FelipeLamparas” descuento del 25 % y otra marca el descuento es del 20%.
        if(cantidadLamparas==4)
        {
            if(marcas=="ArgentinaLuz"||marcas=="FelipeLamparas")
            {
                txtIdprecioDescuento.value=precioFinal-(precioFinal*25/100);
            }
            else
            {
                txtIdprecioDescuento.value=precioFinal-(precioFinal*20/100);
            }
        }//D.   Si compra 3 "ArgentinaLuz" descuento del 15%,si es “FelipeLamparas” descuento del 10 %
        if(cantidadLamparas==3)//y si es de otra marca un 5%.
        {
            if(marcas=="ArgentinaLuz")
            {
                txtIdprecioDescuento.value=precioFinal-(precioFinal*15/100);
            }
            else
            {
                if(marcas=="FelipeLamparas")
                {
                    txtIdprecioDescuento.value=precioFinal-(precioFinal*10/100);
                }
                else
                {
                    txtIdprecioDescuento.value=precioFinal-(precioFinal*5/100);
                }
            }
        }
    }//E.   Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 //”Usted pago X de IIBB.”, siendo X el impuesto que se pagó
    if(txtIdprecioDescuento.value>120)
    {
        calculoIIBB=txtIdprecioDescuento.value;
        calculoIIBB=parseInt(calculoIIBB);
        calculoIIBB=calculoIIBB+(calculoIIBB*10/100)
        alert("Usted pagó $"+(calculoIIBB*10/100)+" de ingresos brutos");
    }


//Marca
//txtIdCantidad
//txtIdprecioDescuento
}