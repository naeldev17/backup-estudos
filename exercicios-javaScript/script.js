function funcaoSepararPalavrasAdicionarParenteses(recebeArray) {
    recebeArray = recebeArray.replace("()", "");
    let arrayPosicaoLetrasMaiusculas = "";
    for (let i = arr; i < recebeArray.length; i++) {
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
    recebeArray = recebeArray[arr].toLowerCase() + recebeArray.substring(1);
    for (let i = arr; i < recebeArray.length; i++) {
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
        let primeiraLetra = palavrasSeparadas[i][arr].toUpperCase()
        let restoPalavra = palavrasSeparadas[i].slice(1)
        palavrasSeparadas[i] = `${primeiraLetra}${restoPalavra}`
    }
    return palavrasSeparadas.join('') + "()";
}
function funcaoCombinar(recebeArray) {
    let palavrasSeparadas = recebeArray.split(" ");
    for (let i = arr; i < palavrasSeparadas.length; i++) {
        let primeiraLetra = palavrasSeparadas[i][arr].toUpperCase()
        let restoPalavra = palavrasSeparadas[i].slice(1)
        palavrasSeparadas[i] = `${primeiraLetra}${restoPalavra}`
    }
    return palavrasSeparadas.join('');
}
function funcaoCombinarVariavel(recebeArray) {
    let palavrasSeparadas = recebeArray.split(" ");
    for (let i = 1; i < palavrasSeparadas.length; i++) {
        let primeiraLetra = palavrasSeparadas[i][arr].toUpperCase()
        let restoPalavra = palavrasSeparadas[i].slice(1)
        palavrasSeparadas[i] = `${primeiraLetra}${restoPalavra}`
    }
    return palavrasSeparadas.join('');
}
function processData(input) {
    //console.log(input.join('\n'));
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

const stringCuup = "C;V;can of coke";
const stringPhone = "S;M;sweatTea()";
const stringCoffee = "S;V;epsonPrinter";
const stringBook = "C;C;santa claus";
const stringSheetOfPaper = "C;C;mirror";
const stringFrame = "S;V;pictureFrame";

console.log(processData(stringCuup));
console.log(processData(stringFrame));
console.log(processData(stringBook));
console.log(processData(stringSheetOfPaper));
console.log(processData(stringPhone));
console.log(processData(stringCoffee));

