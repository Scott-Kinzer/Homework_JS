// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу
//     дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX
//     - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
//     текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let txtEl = document.getElementById('main_header').textContent = "SEP-2021";

//     b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul')[0];
ul.style.width = "400px";
ul.style.background = "red";


//     c) робить шириниу всіх елементів з класом linkList шириною 50%

let links = Array.from(document.getElementsByClassName('linkList'));

links.forEach(item => item.style.width = "50%");


//     d) отримує текст який зберігається в елементі з класом listElement2

let link2 = document.querySelector('.listElement2').textContent;
console.log(link2)

//     e) отримує всі елементи li та змінює ім колір фону на сірий

let li = document.querySelectorAll('li');
console.log(li);
li.forEach(item => item.style.background = "grey")


//     f) отримує всі елементи 'a' та додає їм клас anchor

let a = document.querySelectorAll('a');

a.forEach(item => {
    item.classList.add('anchor');
})

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу
//     дорівнює link3, змінює йому розмір тексту на 40 пікселів

a.forEach(item => {
    if (item.textContent === "link3") {
        item.style.fontSize = "40px"
    }
})

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX
//     - текстовий контент елементу a

a.forEach(item => {
    item.classList.add(`element_${item.textContent}`);
})

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let promt = prompt();
// document.querySelectorAll('.sub-header').forEach(item => item.style.background = `${promt}`)



//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
//     текст елемнту = content 2 segment . Колір отримати з prompt()

// document.querySelectorAll('.sub-header').forEach(item => {
//     if (item.textContent === "content 2 segment") {
//         item.style.background = `${promt}`
//     }
// })

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()



// document.querySelector('.content_1').textContent = `${prompt()}`;

//     l) отримати елементи p та змінити їм padding на 20px


// document.querySelectorAll('p').forEach(item => item.style.padding = "20px");

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


// document.querySelectorAll('.text2').forEach(item => item.textContent = "sep-2021");
