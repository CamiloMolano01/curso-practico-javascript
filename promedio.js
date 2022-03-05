function calcularMediaAritmetica(lista) {
    /*let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }*/

    const sumaLista = lista.reduce((acumulado = 0, nuevoElemento) => {
        return acumulado + nuevoElemento;
    });
    return sumaLista / lista.length;
}

function mediana(lista) {
    const listaOrdenada = ordenarArray2(lista);
    const indexMitad = parseInt(lista.length / 2);
    if (listaOrdenada.length % 2 === 0) {
        const elemento1 = listaOrdenada[indexMitad];
        const elemento2 = listaOrdenada[indexMitad - 1];
        return (elemento1 + elemento2) / 2;
    } else {
        return listaOrdenada[indexMitad];
    }
}

function ordenarArray(lista) {
    return lista.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
}

function ordenarArray2(lista) {
    return lista.sort((a, b) => {
        return a - b;
    });
}

function ordenarArrays(lista) {
    // b - a para que sea descendente
    // Ya que son arreglos ponemos la pos [1] que es el contador
    return lista.sort((a, b) => {
        return b[1] - a[1];
    });
}


function mode(lista) {
    const listaCont = {};
    lista.map(element => {
        if (listaCont[element]) {
            listaCont[element] += 1;
        } else {
            listaCont[element] = 1;
        }
    });

    const lista1 = ordenarArrays(Object.entries(listaCont));
    console.log(lista1);
    //Imprimimos el array en la posicion 0, que es el primer array
    //y luego ese array en la posicion 0, que es el numero que mas
    //se repite es decir la moda
    return lista1[0][0];
}