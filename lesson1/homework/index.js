// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = "hello";
let owu = "owu";
let com = "com";
let ua = "ua";
let num_1 = 1;
let num_2 = 10;
let num_3 = -999;
let num_4 = 123;
let num_5 = 3.14;
let num_6 = 2.7;
let num_7 = 16;
let boolean_1 = true;
let boolean_2 = false;

let testVar = `
    ${hello},
    ${owu},
    ${com},
    ${ua},
    ${num_1},
    ${num_2},
    ${num_3},
    ${num_4},
    ${num_5},
    ${num_6},
    ${num_7},
    ${boolean_1},
    ${boolean_2}
   `

console.log(
    hello,
    owu,
    com,
    ua,
    num_1,
    num_2,
    num_3,
    num_4,
    num_5,
    num_6,
    num_7,
    boolean_1,
    boolean_2
);

alert(
  testVar
);

document.write(
   testVar
);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

 hello = "hello_1";
 owu = "owu_2";
 com = "com_3";
 ua = "ua_4";
 num_1 = 11;
 num_2 = 101;
 num_3 = -9991;
 num_4 = 1231;
 num_5 = 3.141;
 num_6 = 2.71;
 num_7 = 161;
 boolean_1 = false;
 boolean_2 = true;

console.log(
    hello,
    owu,
    com,
    ua,
    num_1,
    num_2,
    num_3,
    num_4,
    num_5,
    num_6,
    num_7,
    boolean_1,
    boolean_2
);

alert(
   testVar
);

document.write(
   testVar
);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = "Oleksandr";
let middleName = "Romanovych";
let lastName = "Karpiv";

let fullName = firstName + " " + middleName + " " + lastName;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstNamePrompt = prompt("Enter your name ");
let secondNamePrompt = prompt("Enter your second name ");
let yearsPrompt = prompt("Enter your age ");

alert(`
    Congratulations ${firstNamePrompt} ${secondNamePrompt}. You are ${yearsPrompt}
`);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(
    typeof a,
    typeof b,
    typeof c
);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!


console.log(
    5 < 6 ,
        5 > 6 ,
        5 === 6,
        5 >= 6 ,
        10 === 10,
        10 <= 10 ,
        10 > 10 ,
        10 !== 10 ,
        10 < 10,
        123 === '123',
        123 == '123'
);

let str = "20";
let aa = 5;
document.write(str + aa + "<br/>"); // 205
document.write(str - aa + "<br/>"); //  15
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>"); // 10
