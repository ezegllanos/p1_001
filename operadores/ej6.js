/*
Si al menos uno de los valores es string y tiene uno o mas valores numericos,
los numericos se toman como si fueran string.
En esos casos se obtiene siempre el mismo resultado sin importar el orden.
*/
console.log("10" + 5);
console.log(10 + "5");
console.log("10" + "5");
console.log(10 + 5);
