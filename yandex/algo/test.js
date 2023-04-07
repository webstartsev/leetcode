// На вход подаются 3 числа, если они одной четности ? WIN : FAIL

function check(a, b, c) {
    if (
        a % 2 && b % 2 && c % 2 ||
        a % 2 === 0 && b % 2 === 0 && c % 2  === 0
    ) {
        return 'WIN';
    } else {
        return 'FAIL'
    }
}

console.log(check(1, 2, -3)); // FAIL
console.log(check(7, 11, 7)); // WIN
console.log(check(6, -2, 0)); // WIN
