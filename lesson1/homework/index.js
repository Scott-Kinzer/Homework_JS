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
   `
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
);

document.write(
    `
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
);


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
    `
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
);

document.write(
    `
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
);



let firstName = "Oleksandr";
let middleName = "Romanovych";
let lastName = "Karpiv";

let fullName = firstName + " " + middleName + " " + lastName;

// let firstNamePrompt = prompt("Enter your name ");
// let secondNamePrompt = prompt("Enter your second name ");
// let yearsPrompt = prompt("Enter your age ");
//
// alert(`
//     Congratulations ${firstNamePrompt} ${secondNamePrompt}. You are ${yearsPrompt}
// `);


let a = 100;
let b = '100';
let c = true;

console.log(
    typeof a,
    typeof b,
    typeof c
);

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
