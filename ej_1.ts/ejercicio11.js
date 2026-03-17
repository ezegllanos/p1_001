"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num1 = 10;
var num2 = 19;
var num3 = 67;
var mayor;
if (num1 > num2) {
    mayor = num1;
}
else {
    mayor = num2;
}
if (num3 > mayor) {
    mayor = num3;
}
console.log("El numero mayor es " + mayor);
