// Primer ejercicio.  Ejemplo en el cual el usuario ofrece un precio por la remera, y los alert devuelven un texto en funcion del valor elegido.

alert ("remera glizzy, escucho ofertas.")

let precioInicial = 1200
let montroDelCliente = parseInt (prompt("ingresa tu oferta"))

if (montroDelCliente <= 500){
    alert ("es imposible aceptar esa oferta")
}else if (montroDelCliente > 500 && montroDelCliente <= 1199){
    alert ("no es suficiente")
}else if (montroDelCliente >= precioInicial){
    alert ("su compra ha sido realizada")
}else{
    alert ("error, porfavor ingrese numeros")
}


// Segundo ejercicio. Ejercicio simple de ciclos en el cual el console.log muestra en que iteracion del ciclo se encuentra.

let i = 1

for (i = 1; i<=4; i++){
console.log ("iteracion" +" " + i)
}
console.log ("Fin del ciclo")



//Tercer ejercicio. Calculadora de el valor final de un producto cuando uno agrega el 21% del IVA. 
const iva = 1.21
function Producto(id,nombre,precio,stock){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock

    this.calcularIva = function(){
        return "el precio con iva es: " + precio * iva
    }

    this.ajustarStock = function(unidadesVendidas){
        if(typeof unidadesVendidas === "number" && this.stock >= unidadesVendidas && this.stock > 0){
            return this.stock - parseInt(unidadesVendidas) + "unidades restantes"
        }else{
            console.error("error al descontar unidades")
        }
    }

}


const producto1 = new Producto(1, "apple", 300000, 6)

producto1.ajustarStock(8)

