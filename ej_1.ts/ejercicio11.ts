let num1: number = 10
let num2: number = 19
let num3: number = 67
let mayor: number;

if (num1 > num2){
    mayor = num1;
} else {
    mayor = num2;
}
if (num3 > mayor){
  mayor = num3;  
}

console.log("El numero mayor es " + mayor);

export{}