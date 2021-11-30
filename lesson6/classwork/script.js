// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let validName = (str) => {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let newArr = str.split("");

    newArr.forEach((item, i) => {
        if (!(alphabet.includes(item.toUpperCase()))) {
            newArr[i] = " ";
            if (newArr[i - 1])  {
                newArr[i - 1] = alphabet.includes(newArr[i - 1].toUpperCase()) ? newArr[i - 1] : "";
            }

            if (newArr[i + 1])  {
                newArr[i + 1] = alphabet.includes(newArr[i + 1].toUpperCase()) ? newArr[i + 1] : "";
            }
        }
    })

    return newArr.join('')
}

console.log(validName('---Hermione...-- []545 Granger--'))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randFunc = () => {
    let arr = [];

    for (let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * 100));
    }

    return arr;
}

// console.log(randFunc());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних
// цілих числових значень. Відсортувати його за допомоги sort

let sortArr = randFunc().sort((a,b) => a - b);
// console.log(sortArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних
// цілих числових значень. відфільтрувати  його за допомоги filter,
// залишивши тільки парні числа

let filterArr = sortArr.filter(item => !(item % 2))
// console.log(filterArr)

// - створити масив рандомних цілих числових значень
// (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let mapArr = randFunc().map(item => item.toString())
// console.log(mapArr)

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.


let nums = [11,21,3];
let sortNums = (direction) => {
    let arr = [];
    switch (direction) {
        case 'ascending':
          arr = nums.sort((a, b) => a - b);
          break;
        case 'descending':
            arr = nums.sort((a, b) => b - a);
            break;
    }

    return arr;
}

// console.log(sortNums('descending'))

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців



let arrMonthDuration = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(arrMonthDuration);

let sortMonth = coursesAndDurationArray.filter(item => item.monthDuration > 5);
// console.log(sortMonth)



// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let cutString = (str, n) => {
//     let arr = str.split("");
//     let text = "";
//     let emptyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!((i + 1) % n)) {
//             text += arr[i];
//             emptyArr.push(text);
//             text = "";
//         }   else {
//             text += arr[i];
//         }
//
//
//     }
//
//     return emptyArr;
// }

let cutString = (str, n) => {
    let arr = str.split("");
    let text = "";
    let emptyArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!((i + 1) % n)) {
    //         text += arr[i];
    //         emptyArr.push(text);
    //         text = "";
    //     }   else {
    //         text += arr[i];
    //     }
    //
    //
    // }
    //
    let p = arr.map((item, i) => {
        if (!((i + 1) % n)) {
            text += item;
            emptyArr.push(text);
            text = "";
        }   else {
            text += item;
        }

    })

    emptyArr.push(text)


    return emptyArr;
}



console.log(cutString("наслаждение", 3));