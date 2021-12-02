// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

function createBlock () {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('wrap', 'collapse',  'alpha', 'beta');

    blockDiv.style.background = 'grey';
    blockDiv.style.color = 'purple';
    blockDiv.style.fontSize = '30px';
    blockDiv.textContent = "lorem";
    document.querySelector('body').append(blockDiv);

    return blockDiv;
}

let el = createBlock();
let copyNode = el.cloneNode(true);
document.body.append(copyNode);



// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для
// кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

function makeList(arr) {
    let ul = document.querySelector('.menu');
    arr.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    })


}

// makeList(['Main','Products','About us','Contacts'])

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

function makeCoursesShow(arr) {
    let wrapper = document.createElement('div');
    wrapper.style.background = 'red';
    wrapper.style.marginTop = '20px';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'space-around';

    let randomColors = ['red', 'purple', 'green', 'yellow'];

    arr.forEach(item => {
        let divWrap = document.createElement('div');
        divWrap.style.background = randomColors[Math.round(Math.random() * randomColors.length)];
        divWrap.style.width = '100%';
        divWrap.style.height= '100px';

        divWrap.style.display = 'flex';
        divWrap.style.alignItems= 'center';

        divWrap.style.justifyContent = 'center';
        divWrap.style.cursor = 'pointer';
        let title = document.createElement('div');
        title.textContent = item.title;
        let month = document.createElement('div');
        month.textContent = item.monthDuration;
        divWrap.append(title, month);
        wrapper.append(divWrap);

        divWrap.addEventListener('click', function ()  {

            alert(title.textContent);
            this.remove();
        })

    })
    document.body.append(wrapper);
}
makeCoursesShow([
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
])


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.




function makeCoursesAndShow(arr) {
    let wrapper = document.createElement('div');
    wrapper.style.background = 'red';
    wrapper.style.marginTop = '20px';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'space-around';

    let randomColors = ['red', 'purple', 'green', 'yellow'];

    arr.forEach(item => {
        let divWrap = document.createElement('div');
        divWrap.classList.add('item');
        divWrap.style.background = randomColors[Math.round(Math.random() * randomColors.length)];
        divWrap.style.width = '100%';
        divWrap.style.height= '100px';

        divWrap.style.display = 'flex';
        divWrap.style.flexDirection = 'column';
        divWrap.style.alignItems= 'center';

        divWrap.style.justifyContent = 'center';
        divWrap.style.cursor = 'pointer';
        let title = document.createElement('h1');
        title.classList.add('heading');
        title.textContent = item.title;
        let month = document.createElement('p');
        month.classList.add('description');
        month.textContent = item.monthDuration;
        divWrap.append(title, month);
        wrapper.append(divWrap);

        divWrap.addEventListener('click', () => {
            alert(title.textContent);
        })

    })
    document.body.append(wrapper);
}

makeCoursesAndShow([
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
])

