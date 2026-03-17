let compraSinDescuento: number = 1500;
let compraConDescuento: number = compraSinDescuento;
let descuentoPorcentaje: number = 10;

if (compraSinDescuento > 1000) {
    compraConDescuento = compraSinDescuento * (1-(descuentoPorcentaje/100));
}

console.log(`Compra con descuento es ${compraConDescuento}`);

 export{}