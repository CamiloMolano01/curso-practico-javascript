function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento) / 100;
}

function onClickcalcularPrecioConDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es: " + precioConDescuento
}