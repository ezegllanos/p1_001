/*
El resultado de '5' + '5' es "55" porque eltipo de datos es un string.
Es decir, el operador + cuabndo opera sobre numeros los suma pero cuando opera sobre strings los une.
*/

let s_a: string = "5";
let n_a: number = 5;

console.log(s_a + s_a); // 55
console.log( n_a + n_a); // 10

let s_b: string = "7";
let n_b: number = 7;

console.log(s_b + s_b); // 77
console.log(n_b + n_b); // 14

export{}