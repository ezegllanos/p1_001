"use strict";
/*
Node.js (JavaScript) evalúa las expresiones siguiendo las reglas de precedencia de operadores
Es decir orden similar al conocido como PEMDAS:
    1. primero paréntesis (P)
    2. luego multiplicación (M)
    3. división (D)
    4. finalmente suma (A) y resta (S).
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ejemplo1 = 2 + 3 * 4; // 14
var ejemplo2 = (2 + 3) * 4; // 20
var ejemplo3 = 6 + 4 / 2; // 8
var ejemplo4 = (6 + 4) / 2; // 5
console.log(ejemplo1);
console.log(ejemplo2);
console.log(ejemplo3);
console.log(ejemplo4);
