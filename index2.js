function falsyOrTruthy(elem1, elem2) {
    if (!elem1) {
        return elem1
    }
    return elem2
}

// console.log(falsyOrTruthy(0, 500));


function arrLength(arr) {
    return arr.length;

}

// console.log(arrLength([1, 2, 3, 5, 61, 2]))

function arrSum(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum;
}

// console.log(arrSum([2, 11, 3]))

function progressiveSum(num) {
    sum = 0;
    for (let i = 0; i <= num; ++i) {
        sum = sum + i;
    }

    return sum;
}

// console.log(progressiveSum(600));

function calcTime(seconds) {
    timeInSeconds = seconds % 60;
    timeInMinutes = Math.floor(seconds / 60);

    if (timeInMinutes < 10) {
        timeInMinutes = '0' + timeInMinutes
    }
    if (timeInSeconds < 10) {
        timeInSeconds = '0' + timeInSeconds
    }

    return timeInMinutes + ':' + timeInSeconds
}

// console.log(calcTime(54))

function getMax(arr) {
    maxNum = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum
}

// console.log(getMax([5, 100, 500]))

function reverseString(str) {
    reverse = '';
    /* for (let i = 0; i < str.length; ++i) {
        reverse = str[i] + reverse;
    } */

    /* for (let i = str.length - 1; i >= 0; --i) {
        reverse = reverse + str[i];
    } */

    return str.split('').reverse().join('')
}

// console.log(reverseString('abc'))

function convertToZeros(arr) {
    /* newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0;
        newArr = arr;
    }
    return newArr */

    // return new Array(arr.length).fill(0)

    return arr.map(elem => 0)
}

// console.log(convertToZeros([5, 155, 0, 12]))

function removeApples(arr) {
    /*     let filteredArr = [];
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] !== 'Apple') {
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr */

    return arr.filter(elem => elem !== 'Apple')
}

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple', 'Orange']))

function filterOutFalsy(arr) {
    /*     filteredArr = [];
        for (let i = 0; i < arr.length; ++i) {
            if (!!arr[i]) {
                filteredArr.push(arr[i])
            }
        }
        return filteredArr */

    return arr.filter(elem => !!elem === true)
}
// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

function convertToBoolean(arr) {
    /*     newArr = [];
        for (let i = 0; i < arr.length; ++i) {
            if (!!arr[i]) {
                arr[i] = true;
                newArr.push(arr[i])
            } else {
                arr[i] = false
                newArr.push(arr[i])
            }
        }
        return newArr */

    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "Matas", "", []]))