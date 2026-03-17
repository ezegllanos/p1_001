"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compraSinDescuento = 1500;
var compraConDescuento = compraSinDescuento;
var descuentoPorcentaje = 10;
var descuento = 0;
if (compraSinDescuento > 1000) {
    compraConDescuento = compraSinDescuento * (1 - (descuentoPorcentaje / 100));
}
console.log("Compra con descuento es ".concat(compraConDescuento));
