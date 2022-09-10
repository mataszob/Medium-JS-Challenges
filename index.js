/* function falsyVar(var1, var2) {
    return !var1 ? var1 : var2
}

console.log(falsyVar(0, 500))
console.log(falsyVar(false, 100))
console.log(falsyVar([true, 'Dog']))

function arrLength(arr) {
    return arr[arr.length - 1]
}

console.log(arrLength([1, 2, 3, 4]))

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 3, 5]))

function progressiveSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; ++i) {
        sum = sum + i;
    }

    return sum
}

console.log(progressiveSum(6))

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes;
    }

    if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds;
    }

    return timerMinutes + ":" + timerSeconds
}

console.log(calcTime(885))

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

console.log(getMax([5, 100, 0]))

function reverseString(str) {
    let reversed = '';
    for (let i = 0; i < str.length; ++i) {
        reversed = str[i] + reversed;
    }
    return reversed

    return str.split('').reverse().join('')
}

console.log(reverseString('booba'))

function arrToZero(arr) {

    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0;
    }
    return arr;
    return new Array(arr.length).fill(0)
    return arr.map(elem => 0)
}

console.log(arrToZero([5, 100, 0]))

function filterApples(arr) {
    noApples = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i])
        }
    }
    return noApples

    return arr.filter(elem => elem !== 'Apple')
}

console.log(filterApples(['Banana', 'Apple', 'Orange', 'Apple']))

function filterFalsy(arr) {
    noFalsy = [];

    for (let i = 0; i < arr.length; ++i) {

        if (!!arr[i]) {
            noFalsy.push(arr[i])
        }

    }
    return noFalsy;

    return arr.filter(elem => !!elem == true)
}

console.log(filterFalsy(["", [], 0, null, undefined, "0"]))

function convertToFalseAndTrue(arr) {
    return arr.map(elem => !!elem === true)
}

console.log(convertToFalseAndTrue([500, 0, "David", "", []])) */