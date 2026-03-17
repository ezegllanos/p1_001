"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lado_1 = 8;
var lado_2 = 5;
var lado_3 = 4;
if (lado_1 === lado_2 && lado_2 === lado_3) {
    console.log("El triangulo es equilatero");
}
else if (lado_1 === lado_2 || lado_2 === lado_3 || lado_1 === lado_3) {
    console.log("El triangulo es isosceles");
}
else {
    console.log("El triangulo es escaleno");
}
