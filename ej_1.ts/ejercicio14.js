"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var anio = 2026;
if (((anio % 4) === 0 && !((anio % 100) === 0)) || (anio % 400) === 0) {
    console.log("Es un año biciesto");
}
else {
    console.log("No es un año biciesto");
}
