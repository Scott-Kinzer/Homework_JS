// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numArr = [1,2,3,4,5];
console.log(numArr)
for (let num of numArr) {
    console.log(num);
}

let stringArr = ["1","2","3","4","5"];
console.log(stringArr)
for (let str of stringArr) {
    console.log(str);
}

let everythingArr = [1,"2", true, "1,", 2];
console.log(everythingArr)
for (let el of everythingArr) {
    console.log(el);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArr = [];

for (let i = 0; i < 5; i++) {
    emptyArr[i] = i;
}

console.log(emptyArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write("<div>ТЕЕЕКСТ</div>");
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>ТЕКСТ ${i}</div>`);
// }
//
//
// let count = 0;
//
// while (count < 20) {
//     document.write("<div>ТЕЕЕКСТ З WHILE</div>");
//     count++;
// }

let count_2 = 0;

// while (count_2 < 20) {
//     document.write(`<div>ТЕЕЕКСТ З WHILE ${count_2 + 1}</div>`);
//     count_2++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи


let arrWithNums = [53,74,41,754,523,654,12,645,23,45];

for (let item of arrWithNums) {
    console.log(item);
}

let arrWithString = ["53","74","41","754","523","654","12","645","23","45"];

for (let str of arrWithString) {
    console.log(str);
}

let diffArray = ["543", {}, [], 653, "", true, " ", 63, 100, 64];

for (let item of diffArray) {
    console.log(item);
}

for (let item of diffArray) {
    if (typeof item === "boolean") {
        console.log(item);
    }
}


for (let item of diffArray) {
    if (typeof item === "number") {
        console.log(item);
    }
}


for (let item of diffArray) {
    if (typeof item === "string") {
        console.log(item);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


let emptyArr_2 = [];
let testArrGen = ["string", true, 5, {}]
for (let i = 0; i < 10; i++) {
    emptyArr_2[i] = testArrGen[Math.floor(Math.random() * 4)];
}

for (let emp of emptyArr_2) {
    console.log(emp);
}

//
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write("Iteration")
// }
//
// for (let i = 0; i < 100; i = i + 1) {
//     console.log(i)
//     document.write("Iteration")
// }
//
//
// for (let i = 0; i < 200; i = i + 2) {
//     console.log(i)
//     document.write("Iteration")
// }


for (let i = 0; i < 100; i++) {
   if (!(i % 2)) {
       console.log(i);
   }
}


for (let i = 0; i < 100; i++) {
    if ((i % 2)) {
        console.log(i);
    }
}




