const objeto = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Charlie', idade: 20 }
];

function bubbleSort(idade, indice) {
    let trocaElemntos;
    do {
        trocaElemntos = false;
        for (let i = 0; i < idade.length - 1; i++) {
            if (idade[i][indice] > idade[i + 1][indice]) {
                [idade[i], idade[i + 1]] = [idade[i + 1], idade[i]];
                trocaElemntos = true;
            }
        }
    } while (trocaElemntos);
    return idade;
}

let idade = bubbleSort(objeto, 'idade');
console.log(idade);
