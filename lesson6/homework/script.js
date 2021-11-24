// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// console.log('   dirty string    .'.split(" ").join(""));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str) => {
    return str.split(" ");
}

// console.log(stringToarray('Каждый охотник желает знать'));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.substring(0, length);
// console.log(delete_characters('Каждый охотник желает знать', 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    return str.split(" ").join("-");
}

// console.log(insert_dash("HTML JavaScript PHP"));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.


let transFormFunc = (str) => {

    let b = str.split("");
    b[0] = b[0].toUpperCase();
    return b.join("");
}

// console.log(transFormFunc("lala"));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


let capitalize = (str) => {
    return str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
}

// console.log(capitalize("hello world mike"));

