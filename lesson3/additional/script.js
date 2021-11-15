// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
//  - додати його в інший масив.

// let emptyArr = [];
//
// for (let i = 0, x =0; i < 50; i++, x += 2) {
//     emptyArr[i] = x;
// }
//
// console.log(emptyArr);
//
// for (let i = 0, x =1; i < 50; i++, x += 2) {
//     emptyArr[i] = x;
// }

// console.log(emptyArr);
//
//
// let empty_2 = []
// for (let i = 0; i < 20; i++) {
//     empty_2[i] = Math.floor(Math.random() * 11);
// }
//
// let empty_3 = []
// for (let i = 0; i < 20; i++) {
//     empty_3[i] = Math.floor(Math.random() * (732 - 8 + 1) + 8)
// }


//  2. Вивести за допомогою console.log кожен третій елемен

let b = [45,53,65,75,7,24,64,76, 85,4,6,8,12];
//
// for (let i = 0; i < b.length; i++) {
//     if (!((i + 1) % 3)) {
//         console.log(b[i])
//     }
// }


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < b.length; i++) {
//     if (!((i + 1) % 3) && !(b[i] % 2)) {
//         console.log(b[i])
//     }
// }


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let addArr = [];
//
// console.log(addArr.length)
// for (let i = 0; i < b.length; i++) {
//     if (!((i + 1) % 3) && !(b[i] % 2)) {
//         addArr[addArr.length] = b[i];
//         console.log(addArr)
//     }
// }

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let testArr_5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//
// for (let i = 0; i < testArr_5.length; i++ ){
//     // console.log(testArr_5[i + 1])
//     if (!(testArr_5[i + 1] % 2) && testArr_5[i + 1]) {
//         console.log(testArr_5[i]);
//     }
// }


// //  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої
// покупки. Обрахувати середній чек.

// let dataArr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let item of dataArr) {
//     sum += item;
// }
// let average = sum / dataArr.length;
// console.log(average);


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let arrAgain = [43,754,431,754,123,654,856,34,63];
// let copy = [];
// for (let i = 0; i < arrAgain.length; i++) {
//     copy[i] = arrAgain[i] * 5;
// }
//
// console.log(copy);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
//  - додати його в інший масив.

// let lastArr = ["ldfkjs", 643, '5346', {}, true, 634763];
// let k = [];
// for (let item of lastArr) {
//     if (typeof item === "number") {
//         k.push(item);
//     }
// }
//
// console.log(k);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]


for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (city.user_id === user.id) {
            usersWithCities.push({...user, ...city})
        }
    }
}


console.log(usersWithCities)


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let kk = [543,745,324,645,32,4,6432,564,3,23];

for (let item of kk) {
    if (item % 2 === 0) {
        console.log(item);
    }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let kk_emty = [];
for (let item of kk) {
    kk_emty.push(item);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let abc = [ 'a', 'b', 'c'];
let word = "";
for (let item of abc) {
    word += item;
}

console.log(word)

let word_2 = "";
let n = 0;
while (n < abc.length) {
    word_2 += abc[n];
    n++;
}


let word_3 = "";
for (let i = 0; i < abc.length; i++) {
    word_3 += abc[i];
}

console.log(word_3);