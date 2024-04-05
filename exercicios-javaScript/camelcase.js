function funcaoSepararPalavrasAdicionarParenteses(recebeArray) {
    recebeArray = recebeArray.replace("()", "");
    let arrayPosicaoLetrasMaiusculas = "";
    for (let i = 0; i < recebeArray.length; i++) {
        let letras = recebeArray[i];
        if (letras !== letras.toLowerCase()) {
            arrayPosicaoLetrasMaiusculas += " " + letras.toLowerCase();
        } else {
            arrayPosicaoLetrasMaiusculas += letras;
        }
    }
    return arrayPosicaoLetrasMaiusculas;
}

function funcaoSepararClasse(recebeArray) {
    let arrayPosicaoLetrasMaiusculas = "";
    recebeArray = recebeArray[0].toLowerCase() + recebeArray.substring(1);
    for (let i = 0; i < recebeArray.length; i++) {
        let letras = recebeArray[i];
        if (letras !== letras.toLowerCase()) {
            arrayPosicaoLetrasMaiusculas += " " + letras.toLowerCase();
        } else {
            arrayPosicaoLetrasMaiusculas += letras;
        }
    }
    return arrayPosicaoLetrasMaiusculas;
}

function funcaoCombinarParenteses(recebeArray) {
    let palavrasSeparadas = recebeArray.split(" ");
    for (let i = 1; i < palavrasSeparadas.length; i++) {
        let primeiraLetra = palavrasSeparadas[i][0].toUpperCase()
        let restoPalavra = palavrasSeparadas[i].slice(1)
        palavrasSeparadas[i] = `${primeiraLetra}${restoPalavra}`
    }
    return palavrasSeparadas.join('') + "()";
}

function funcaoCombinar(recebeArray) {
    let palavrasSeparadas = recebeArray.split(" ");
    for (let i = 0; i < palavrasSeparadas.length; i++) {
        let primeiraLetra = palavrasSeparadas[i][0].toUpperCase()
        let restoPalavra = palavrasSeparadas[i].slice(1)
        palavrasSeparadas[i] = `${primeiraLetra}${restoPalavra}`
    }
    return palavrasSeparadas.join('');
}

function funcaoCombinarVariavel(recebeArray) {
    let palavrasSeparadas = recebeArray.split(" ");
    for (let i = 1; i < palavrasSeparadas.length; i++) {
        let primeiraLetra = palavrasSeparadas[i][0].toUpperCase()
        let restoPalavra = palavrasSeparadas[i].slice(1)
        palavrasSeparadas[i] = `${primeiraLetra}${restoPalavra}`
    }
    return palavrasSeparadas.join('');
}

function processData(input) {
    let array = input.split(";");
    let recebeArray = array[2];

    if (array[0] == "S") {
        if (array[1] == "M") {
            recebeArray = funcaoSepararPalavrasAdicionarParenteses(recebeArray);
        }
        if (array[1] == "V") {
            recebeArray = funcaoSepararPalavrasAdicionarParenteses(recebeArray);
        }
        if (array[1] == "C") {
            recebeArray = funcaoSepararClasse(recebeArray);
        }
    }
    if (array[0] == "C") {
        if (array[1] == "M") {
            recebeArray = funcaoCombinarParenteses(recebeArray);
        }
        if (array[1] == "V") {
            recebeArray = funcaoCombinarVariavel(recebeArray);
        }
        if (array[1] == "C") {
            recebeArray = funcaoCombinar(recebeArray);
        }
    }
    return recebeArray;
}
  
function processDataInput(input) {
    let array = input.split('\n');
    let palavras = ''

    for (let index = 0; index < array.length; index++) {
        palavras = (array[index].replace('/r', ''))
        palavras = processData(palavras)
        console.log(palavras)
    }

}

const palavras = `S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter`;

processDataInput(palavras);
