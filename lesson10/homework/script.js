// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы
// при клике на кнопку исчезал элемент с id="text".

let button = document.createElement('button');
button.style.width = '500px';
button.textContent = 'lala';
button.style.background = 'red';
document.body.append(button);

function createHide() {
    let text = document.createElement('div');
    text.setAttribute('id', 'text');
    text.textContent = 'TEXT';
    text.style.fontSize = '30px';
    document.body.append(text, button);
    button.style.width = '500px';
    button.textContent = 'lala';

    button.style.background = 'red';
    button.addEventListener('click', () => {
        text.style.display = 'none';
    })
}

// createHide();

function hideYourself() {
        // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
    this.style.display = 'none';
}

// button.addEventListener('click', hideYourself);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та
// перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function readData() {
    let input = document.createElement('input');
    document.body.append(input);
    function readInput() {
       if ( +input.value && +input.value > 18 ) {
           alert('Your age is bigger than 18');
       } else {
           alert('Your age is less than 18 or data is wrong');
       }
    }
    button.addEventListener('click', readInput);

}

// readData();

// - Создайте меню, которое раскрывается/сворачивается при клике

function createMenu() {
    let container = document.createElement('container');
    container.style.width = '1140px';
    container.style.margin = '0 auto';
    let wrapper = document.createElement('div');
    wrapper.style.background = 'blue';
    wrapper.style.marginTop = '20px';
    let burger = document.createElement('div');

    burger.style.width = '100%';
    burger.style.background = 'red';
    burger.textContent = 'BURGER-CLICK';
    burger.style.cursor = 'pointer';
    wrapper.append(burger);

    let itemWrapper = document.createElement('div');
    for (let i = 0; i < 5; i++) {
        let item = document.createElement('div');
        item.classList.add('link');
        item.style.width = '100%';
        item.style.height = '50px';
        item.style.background = 'green';
        item.style.marginTop = '10px';
        itemWrapper.append(item);

    }

    let i = 0;
    burger.addEventListener('click', () => {
        if (!i) {
            itemWrapper.style.display = 'none';
            i = 1;
        } else  {
            itemWrapper.style.display = 'block';
            i = 0;
        }

    })

    wrapper.append(itemWrapper)
    container.append(wrapper)
    document.body.append(container);
}

createMenu();

// - Создать список комментариев , пример объекта коментария
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


let arrObj = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
]
function makeComments(arr) {
    let container = document.createElement('container');
    container.style.width = '1140px';
    container.style.margin = '0 auto';
    let wrapper = document.createElement('div');

    for (let item of arr) {
        let elWrapper = document.createElement('div');
        let elWrapperAdd = document.createElement('div');
        let title = document.createElement('div');
        title.textContent = item.title;

        let description = document.createElement('div');
        description.textContent = item.body;

        let button = document.createElement('button');
        button.textContent = 'TOGGLE';

        button.addEventListener('click', () => {
            if (!elWrapperAdd.classList.contains('hidden')) {
                elWrapperAdd.classList.add('hidden');
                elWrapperAdd.style.display = 'none';
            } else {
                elWrapperAdd.classList.remove('hidden');
                elWrapperAdd.style.display = 'block';
            }
        })

        elWrapperAdd.append(title, description)
        elWrapper.append(elWrapperAdd, button)

        wrapper.append(elWrapper);
    }


    container.append(wrapper)
    document.body.append(container);
}


// makeComments(arrObj)


//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці
//  він стає жирний/курсивний/або якось іншим способом змінює свій стан

// console.log(document.selection.createRange().text)
//
// let text = '';
// function copyText(e) {
//
//
//
//     console.log(b);
//     // let k = e.target
//     text = document.getSelection();
//     let bl = document.getSelection().toString()
//
//     let fulltext = text.extentNode.nodeValue;
//
//     function change(bl) {
//        return `<b>${bl}<b>`
//     }
//
//     // console.log(e.target.checked)
//
//     e.target.outerHTML = `<p>  ${fulltext.replace(bl, change(bl))} </p>`
//
//     e.target.checking = b
//
//     // console.log(e.target)
//
//     // console.log(e.target.outerHTML);
//
// }
// document.onmouseup = copyText;