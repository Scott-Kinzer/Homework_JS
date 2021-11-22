// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const minFunc = (...array) => array.sort((item_1, item_2) => item_1 - item_2)[0];


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const maxFunc = (...array) => array.sort((item_1, item_2) => item_2 - item_1)[0];

// console.log(minFunc(4,2,6))
// console.log(maxFunc(4,2,6))

// - створити функцію яка повертає найбільше число з масиву
const maxArrayFunc = (array) => array.sort((item_1, item_2) => item_2 - item_1)[0];
// console.log(maxArrayFunc([4,2,6]))

//- створити функцію яка повертає найменьше число з масиву
const minArrayFunc = (array) => array.sort((item_1, item_2) => item_1 - item_2)[0];
// console.log(minArrayFunc([4,2,6]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumFunction = (array => array.reduce((reducer, item) => {
          reducer += item;
          return reducer;
    },0)
)

// console.log(sumFunction([1,2,10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let avarageFunc = (array) => sumFunction(array) / array.length;

// console.log(avarageFunc([1,1,13]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

let weirdFunc = (...array) => {
    console.log(maxArrayFunc(array));
    return minArrayFunc(array);
}

// console.log(weirdFunc(1,2,3))

// - створити функцію яка заповнює масив рандомними числами

let randFunc = (array) => {
    "array".split('').forEach((item, i) => array[i] = Math.round(Math.random()*100))
    return array;
}

// console.log(randFunc([]))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.



let randFunc_2 = (array, limit) => {

   for (let item = 0; item < limit; item++) {
       array[item] = Math.round(Math.random()*100)
   }

   return array;
}

// console.log(randFunc_2([], 10))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


let reverse = (arr) => {
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

console.log(reverse([1,2,3]))

