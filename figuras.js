// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

// Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 + " cm, "
    + ladoTriangulo2 + " cm, "
    + baseTriangulo + " cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm");


//Código del círculo
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cm");
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cm");
const PI = Math.PI;
console.log("Pi es " + PI);
const circunferenciaCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es " + circunferenciaCirculo + " cm");
const areaCirculo = Math.pow(radioCirculo, 2) * PI;
console.log("El area del circulo es " + areaCirculo + " cm2");
console.groupEnd();

console.groupEnd();
