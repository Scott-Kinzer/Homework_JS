//  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//  до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 56;

    if (time <= 15) {
        console.log("Перша четверть");
    } else if (time <= 30) {
        console.log("Друга четверть");
    } else if (time <= 45) {
        console.log("Третя четверть");
    } else {
        console.log("Четверта четверть")
    }


    // - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = 21;

    if (day <= 10) {
        console.log("Перша декада");
    } else if (day <= 20) {
        console.log("Друга декада");
    } else if (day <= 31) {
        console.log("Третя декада");
    }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = false;

    if (test !== true) {
        console.log("Вірно");
    } else {
        console.log("Неправильно");
    }

    let b = test !== true ? "Вірно" : "Неправильно";
    console.log(b)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть
// 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = -3;
if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}


//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let userNum = +prompt("Enter number of week");

switch (userNum) {
    case 1:
        console.log("Eat");
        break;
    case 2:
        console.log("Walk")
        break;
    case 3:
        console.log("Play");
        break;
    case 4:
        console.log("Speak");
        break;
    case 5:
        console.log("Listen");
        break;
    case 6:
        console.log("Sleep");
        break;
    case 7:
        console.log("Drink");
        break;
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = 2012;

if (year % 4 === 0) {
    console.log("Високосний" + year);
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let ask = prompt("Яка офіційна назва JavaScript?");

if (ask === "ECMAScript") {
    alert("Правильно!");
} else {
    alert("Не знаєте? ECMAScript!")
}






