
let areas= require ("./Areas.js")

let AFigura = "El area de la figura ";

let cuadrado=areas.areaCuadrado(32);
let nombre1 = "Cuadrado es:";

let triangulo=areas.areaTriangulo(10,2);
let nombre2 = "Triangulo es: ";

let rectangulo=areas.areaRectangulo(12,5);
let nombre3 = "Rectangulo es: ";

let circulo=areas.areaCirculo(4);
let nombre4 = "Circulo es: ";
//Diseño
let cuadradoascii=areas.dibujarCuadradoASCII(10);

let mensaje1 = AFigura.concat(nombre1);
let mensaje2 = AFigura.concat(nombre2);
let mensaje3 = AFigura.concat(nombre3);
let mensaje4 = AFigura.concat(nombre4);

console.log(mensaje1);
console.log(cuadrado);

console.log(mensaje2);
console.log(triangulo);

console. log(mensaje3);
console.log(rectangulo);

console.log(mensaje4);
console.log(circulo);

console.log("CUADRO ASCII")
console.log(cuadradoascii);
