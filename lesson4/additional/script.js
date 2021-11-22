// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два
// аргументи - складає або конкатенує їх між собою.

function connect(a,b) {
    return b ? a + b : a;
}

// console.log(connect(5, 6))

// - створити функцію  яка приймає два масиви та скаладає значення елементів
// з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function addArrays(arr_1, arr_2) {
    return arr_1.map((item,i) => arr_1[i] + arr_2[i]);
}

// console.log(addArrays([2,3,4], [3,4,5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let getKeysData = (arr) => {
    let arrKeys = [];
    for (let item of arr) {
        for(let key in item) {
            arrKeys.push(key);
        }
    }

    return arrKeys;
}

// console.log(getKeysData([{name: 'Dima', age: 13}, {model: 'Camry'}]))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


let getValuesData = (arr) => {
    let arrValues = [];
    for (let item of arr) {
        for(let key in item) {
            arrValues.push(item[key]);
        }
    }
    return arrValues;
}

// console.log(getValuesData([{name: 'Dima', age: 13}, {model: 'Camry'}]));


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

function swapping(arr, num) {
    let temp = arr[num];
    arr[num] = arr[num + 1];
    arr[num + 1] = temp;

    return arr;
}

// console.log(swapping([9,8,0,4], 2))



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]




function arr(arr_arg) {
    let arr = [...arr_arg]
    let lenArr = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i]);
            for (let b = i; b < arr.length; b++) {
                arr[b] = arr[b + 1];
                if (!(arr[b + 1]) && arr[b + 1]!== 0 && b === lenArr) {
                    break
                }
            }
            i--;
        }
        if (i === lenArr) {
            break
        }
    }
    return arr.filter(item => item !== undefined);
}

// console.log(arr([1,0,6,0,3]));


function validate(str) {
    return              str.split('@').length === 2 ? str.split('@')[0].length > 0 ?
                    str.split('@')[1].split('.').length === 2 &&
                str.split('@')[0].split('.').length === 1  ?
            str.split('@')[1].split('.')[0].length > 1 ?
            "Валідація пройшла успішно" :
                "Введіть коректну адресу типу 'ua', 'gmail" :
                    "Зайва крапка або недостатньо крапок" :
                        "Не правильна адреса перед равликом"  :
                            "Ви ввели за багато равликів або взагалі не ввели";

}

console.log(validate("@ilgi.com"))

