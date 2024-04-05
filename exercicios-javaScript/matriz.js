let arr = [5, [3, 5, 6, 8, 10], [3, 5, 6, 8, 10], [3, 5, 6, 8, 10], [3, 5, 6, 8, 10], [3, 5, 6, 8, 10]]

function diagonalDifference(arr) {
    let somaDiagonalPrincipal = 0;
    let somaDiagonalSecundaria = 0;
    let diferenca = 0;
    let tamanho = arr[0]

    for (let i = 1; i <= tamanho; i++) {
        for (let j = 1; j <= tamanho; j++) {
            if (i == j) {
                somaDiagonalPrincipal += arr[i][j - 1];
            }
            if (i + j == tamanho + 1) {
                somaDiagonalSecundaria += arr[i][j - 1];
            }
        }
    }
    diferenca = somaDiagonalPrincipal - somaDiagonalSecundaria;
    return Math.abs(diferenca);
}

console.log(diagonalDifference(arr));