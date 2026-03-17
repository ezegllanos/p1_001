"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compraSinDescuento = 1500;
var compraConDescuento = compraSinDescuento;
if (compraSinDescuento > 1000)
    compraConDescuento = compraSinDescuento - 100;
console.log("Compra con descuento es ".concat(compraConDescuento));
