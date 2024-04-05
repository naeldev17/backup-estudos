let password = "Senha12334";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function capitalCamelCase(password) {
    let hasCapitalLetters = false;
    let hasLowerCaseLetters = false;
    let hasNumbers = false;
    let minimumLength = 8;

    if (password.length < minimumLength) {
        return false;
    }

    if (password === " ") {
        return false;
    }

    for (const i of password) {
        if (i === i.toLowerCase() && !numbers.includes(Number(i))) {
            hasLowerCaseLetters = true
        };

        if (i === i.toUpperCase() && !numbers.includes(Number(i))) {
            hasCapitalLetters = true
        };
        if (password.includes(Number(i))) {
            hasNumbers = true
        };
    }
    return hasLowerCaseLetters && hasCapitalLetters && hasNumbers;
}

console.log(capitalCamelCase(password));