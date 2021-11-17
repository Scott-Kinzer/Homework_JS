//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function getMinNum(a, b, c) {
    return a < b && a < c ? a : b < c ? b : c
}

// console.log(getMinNum(1,0,5))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function getMinNum(a, b, c) {
    return a > b && a > c ? a : b > c ? b : c
}

// console.log(getMinNum(6,0,5))


// - створити функцію яка повертає найбільше число з масиву

function maxArr(arr) {
    return arr.reduce((reducer,item)  => {
        if (item > reducer) {
            reducer = item;
            return reducer;
        } else {
            return reducer;
        }
    },arr[0])
}

// console.log(maxArr([100,4,1000,65]))


// - створити функцію яка повертає найменьше число з масиву

function minArr(arr) {
    let min = arr[0];

    for (let item of arr) {
        if (item < min) {
            min = item;
        }
    }

    return min;
}

// console.log(minArr([100,4,1000,65]))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumArr(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }

    return sum;
}

// console.log(sumArr([4,2,6]))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


function avarageArr(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum / arr.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function weirdFunction() {
    console.log(maxArr(Object.values(arguments)))
    return minArr(Object.values(arguments))
}

// console.log(weirdFunction(4,6,74,4,5));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

let arrRnd = [];
function randomGenArr(limit) {
        for (let i = 0; i < limit; i++) {
            arrRnd[i] = Math.round(Math.random()*100);
            console.log(arrRnd[i]);
        }
}



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// debugger;
function reverseArr(arr) {
    for (let i = 0, b = arr.length - 1; i < arr.length, b >= 0; i++, b--) {

        let temp = arr[i];
        arr[i] = arr[b];
        arr[b] = temp;

        if (b === i) {
            break;
        }
    }
    return arr;
}


// console.log(reverseArr([5,6,3,7,2]));
