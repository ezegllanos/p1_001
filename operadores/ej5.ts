// Primero se evaluan los operadores relacionales >, <, ===
// Luego se evaluan los operadores logicos &&, ||
// El operador ! niega el valor booleano de la expresion

console.log(5 > 3 && 10 > 8); 
// true
// orden de evaluacion: 
// 1. 5 > 3 (true)
// 2. 10 > 8 (true)
// 3. true && true = true

console.log(5 > 8 || 10 > 3);
// true
// orden de evaluacion: 
// 1. 5 > 8 (false)
// 2. 10 > 3 (true)
// 3. false || true = true

console.log(!(5 > 3))
// false
// orden de evaluacion: 
// 1. 5 > 3 (true)
// 2. !(true) = false

console.log(4 === 4 && 7 < 2);
// false
// orden de evaluacion: 
// 1. 4 === 4 (true)
// 2. 7 < 2 (false)
// 3. true && false = false
