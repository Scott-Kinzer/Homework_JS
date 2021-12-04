//- створити 2 форми  по 2 інпути в кожній. ствоирити
// кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути
// перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let getData = () => {

    let f = document.createElement("form");
    f.setAttribute('method',"post");

    let i = document.createElement("input");


    let s = document.createElement("input");

    f.appendChild(i);
    f.appendChild(s);

    document.body.append(f);

    let button = document.createElement('button');
    button.textContent = "BUTTON";
    document.body.append(button);
    button.addEventListener('click', () => {
        let selectForm = document.forms[0];
        // console.log(selectForm.elements)
        Array.from(selectForm.elements).forEach(item => console.log(item.value))
    })
}

// getData();

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function buildTable() {

    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let button = document.createElement('button');
    button.textContent = "BUTTON";
    document.body.append(input1, input2, input3, button);

    button.addEventListener('click', () => {

        let rows = input1.value;
        let columns = input2.value;
        let value = input3.value;

        let table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.textContent = value;
                row.append(td);
            }

            table.append(row);
        }

        document.body.append(table);

    })

}

// buildTable();

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

function checkBadWord() {
    let input1 = document.createElement('input');
    let button = document.createElement('button');
    let arrayOfBadWords = ['a', 'b', 'c', 'd','g']
    button.textContent = "BUTTON";

    document.body.append(input1, button);

    button.addEventListener('click', () => {
        if (arrayOfBadWords.includes(input1.value)) {
            alert("Bad woooord");
        }
    })

}

// checkBadWord();

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

function checkBadWord_2() {
    let input1 = document.createElement('input');
    let button = document.createElement('button');
    let arrayOfBadWords = ['a', 'b', 'c', 'd','g'];
    button.textContent = "BUTTON";

    document.body.append(input1, button);

    button.addEventListener('click', () => {
        let k = input1.value.split(" ").find(item => arrayOfBadWords.includes(item));
        if (k) alert("Baad");
    })

}

// checkBadWord_2();

