// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [];
let result = 0;
for (let i = 1; i < 11; i++) {
    arr.push(i)
    result += i;
}

console.log(arr, result);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр


const book = {
    name: "Tom Sawyer",
    qTy: 300,
    genre: "Flexible"
};

console.log(book.name);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори


const book_2 = {
    name: "Tom Sawyer",
    qTy: 300,
    genre: "Flexible",
    authors: ["Blabla", "blablabla"]
};


let bookArr = [book_2, book];

for (let book of bookArr) {
    console.log(book);
}


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let s = 0;
function calcSquare(h, w) {
    s = h * w;
}

calcSquare(23, 10);
console.log(s);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

let v = 0;
const PI = 3.14;
function  calcCylinder(h, D) {
    v = PI * Math.pow(D/2, 2) * h
}

calcCylinder(10, 4);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let k = 0;
function calcTriangle(n, m) {
    k = Math.sqrt(n ** 2 + m ** 2)
}

calcTriangle(3, 4)
console.log(k)

