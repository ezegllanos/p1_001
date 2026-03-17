let lado_1: number = 8
let lado_2: number = 5
let lado_3: number = 4

if (lado_1 === lado_2 && lado_2 === lado_3){
    console.log("El triangulo es equilatero");
}
else if (lado_1 === lado_2 || lado_2 === lado_3 || lado_1 === lado_3){
    console.log("El triangulo es isosceles");
}
else {
    console.log("El triangulo es escaleno");
}

export{}