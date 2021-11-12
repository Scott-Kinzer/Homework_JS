// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа

let a = 4;
let b = 4;

if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else {
    console.log("a = b");
}

//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let home = 89;

if (home <= 20) {
    console.log("Перший під'їзд");
} else if (home <= 48) {
    console.log("Другий");
} else if (home <= 90) {
    console.log("Третій");
}


// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = 10;

if (number === 10) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = true;

if (typeof x === "number") {
    console.log(1);
} else if (typeof x === "string") {
    console.log(2);
} else if (typeof x === "boolean") {
    console.log(3);
} else if (typeof x === "object") {
    console.log(4);
} else {
    console.log("I don't know what is it");
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp = 9;

if (temp >= 10 && temp <= 22) {
    console.log("ЙДЕМ ВЧИТИСЯ");
} else {
    console.log("ВЧИМОСЯ ОНЛАЙН");
}

//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let numQuiz = +prompt("Enter number");

switch (numQuiz) {
    case 1:
        console.log("You got a car!");
        break;
    case 2:
        console.log("You got a house");
        break;
    case 3:
        console.log("You got nothing..");
        break;
    case 4:
        console.log("You got a toy car");
        break;
    case 5:
        console.log("You got a phone");
        break;
}


