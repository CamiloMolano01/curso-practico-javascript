const salariosCol = colombia.map(persona => {
    return persona.salary;
});

/*function esPar(numero) {
    return numero % 2 === 0;
}*/
function ordenarArray2(lista) {
    return lista.sort((a, b) => {
        return a - b;
    });
}

function mediana(lista) {
    const listaOrdenada = ordenarArray2(lista);
    console.log(listaOrdenada);
    const indexMitad = parseInt(lista.length / 2);
    if (listaOrdenada.length % 2 === 0) {
        const elemento1 = listaOrdenada[indexMitad];
        const elemento2 = listaOrdenada[indexMitad - 1];
        return (elemento1 + elemento2) / 2;
    } else {
        console.log("Epa");
        return listaOrdenada[indexMitad];
    }
}

/*function medianaSalarios(lista) {
    return mediana(lista);
}*/

const medianaGeneral = mediana(salariosCol);
const sliceStart = (salariosCol.length * 90) / 100;

const mediana10 = mediana(salariosCol.slice(sliceStart));

console.log({
    medianaGeneral, mediana10,
});