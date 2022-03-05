// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado(55);

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIsósceles(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        return "No es isósceles"
    } else if (lado1 === lado2 && lado1 !== lado3) {
        return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(lado3, 2)/4))
    } else if (lado1 === lado3 && lado1 !== lado2){
        return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(lado2, 2)/4))
    }
}


console.groupEnd();

//Código del círculo
console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//Funciones HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}