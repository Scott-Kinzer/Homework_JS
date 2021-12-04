// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

function showInfoByClick() {

        document.body.addEventListener('click', function (e) {
            console.log(e.target.tagName);
            console.log(e.target.classList);
            console.log(e.target.id);
            console.log(e.target.clientHeight);
            console.log(e.target.clientWidth);
        })
}

// showInfoByClick();

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


function popUpInfoByClick() {

     let popUp = document.createElement('div');
     document.body.append(popUp);
     popUp.classList.add('hidden');
     popUp.style.width = '200px';
     popUp.style.height = '200px';
     popUp.style.background = 'red';

    document.body.addEventListener('click', function (e) {

        popUp.classList.remove('hidden');
        popUp.innerHTML = `
        ${e.target.tagName}
        ${e.target.classList}
        ${e.target.id}
        ${e.target.clientHeight}
        ${e.target.clientWidth}
        `

        setTimeout(() => {
            popUp.classList.add('hidden');
        }, 3000);

    })
}

// popUpInfoByClick();


// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного
// массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

function makeCheckBoxes() {

    let container = document.createElement('div');

    let wrapper = document.createElement('div');
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    document.body.append(input1, input2, input3);
    input1.type = "checkbox";
    input2.type = 'checkbox';
    input3.type = 'checkbox';
    container.style.width = '1140px';
    container.style.margin = '0 auto';
    document.body.append(container);
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';

    let filteredArr = [];
    input1.addEventListener('click', function () {
        if (input1.checked) {
            if (filteredArr.length) {
                filteredArr = filteredArr.filter(item => !item.status);
                showUpdatedInformation();
            } else  {
                filteredArr = usersWithAddress.filter(item => !item.status);
                showUpdatedInformation();
            }
        } else {
            checkIfAllEmpty()
        }
    })

    input2.addEventListener('click', function () {
        if (input2.checked) {
            if (filteredArr.length) {
                filteredArr = filteredArr.filter(item => item.age > 29);
                showUpdatedInformation();
            } else  {
                filteredArr = usersWithAddress.filter(item => item.age > 29);
                showUpdatedInformation();

            }
        } else {
            checkIfAllEmpty()
        }
    })

    input3.addEventListener('click', function () {
        if (input3.checked) {
            if (filteredArr.length) {
                filteredArr = filteredArr.filter(item => item.address.city === 'Kyiv');
                showUpdatedInformation();
            } else  {
                filteredArr = usersWithAddress.filter(item => item.address.city === 'Kyiv');
                showUpdatedInformation();

            }
        } else {
            checkIfAllEmpty()
        }
    })

    function showUpdatedInformation() {
         wrapper.innerHTML = "";

        if (filteredArr.length && (input1.checked || input2.checked || input3.checked)) {
            for (let item of filteredArr) {
                let person = document.createElement('div');
                let {id, name, age, status, address: {city, street, number}} = item
                person.innerHTML = `
                    <table>
                <tr>
                    <td>ID</td>    <td>${id}</td>
                </tr>
                
                <tr>
                    <td>Name</td>    <td>${name}</td>
                </tr>
                
                <tr>
                    <td>Age</td>    <td>${age}</td>
                </tr>
                
                <tr>
                    <td>Status</td>    <td>${status}</td>
                </tr>
                <tr>
                        <tr>
                    <td>City</td>    <td>${city}</td>
                        </tr>
                         <tr>
                    <td>Street</td>    <td>${street}</td>
                        </tr>
                         <tr>
                    <td>Number</td>    <td>${number}</td>
                        </tr>
                </tr>
               
                    </table>
                `;
                wrapper.append(person)
            }
            container.append(wrapper);



        } else {
            for (let item of usersWithAddress) {
                let person = document.createElement('div');

                let {id, name, age, status, address: {city, street, number}} = item

                person.innerHTML = `
                <table>
                <tr>
                    <td>ID</td>    <td>${id}</td>
                </tr>
                
                <tr>
                    <td>Name</td>    <td>${name}</td>
                </tr>
                
                <tr>
                    <td>Age</td>    <td>${age}</td>
                </tr>
                
                <tr>
                    <td>Status</td>    <td>${status}</td>
                </tr>
                <tr>
                        <tr>
                    <td>City</td>    <td>${city}</td>
                        </tr>
                        
                         <tr>
                    <td>Street</td>    <td>${street}</td>
                        </tr>
                        
                         <tr>
                    <td>Number</td>    <td>${number}</td>
                        </tr>
                </tr>
               
                    </table>
                `;
                wrapper.append(person)
            }

            filteredArr = usersWithAddress;
            container.append(wrapper);
        }
    }

    function checkIfAllEmpty() {
        if (!input1.checked && !input2.checked && !input3.checked) {
            showUpdatedInformation()
        }
    }
    showUpdatedInformation()

}

// makeCheckBoxes();


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает
// какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще
// одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие
// "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего
// элемента и переходим к следующему, лежащему с ним на одном уровне.

function makeOverdose() {
    let buttonNext = document.createElement('button')
    buttonNext.textContent = "NEXT";
    let buttonPrev = document.createElement('button')
    buttonPrev.textContent = "PREVIOUS";
    document.body.append(buttonPrev, buttonNext);




    let badi = document.querySelector('.hello');
    let num = 0;
    function nextrecursion(el) {

        console.log(el);
        if (el.firstElementChild && !num) {
            badi = el.firstElementChild;
        } else if (el.nextElementSibling){
           badi = el.nextElementSibling
        } else {

            if (el.parentElement.nextElementSibling) {
                badi = el.parentElement.nextElementSibling;
                num = 0;
            } else {
                badi = el.parentElement;
                num = 1;
            }

        }
    }

    function prevrecursion(el) {
        console.log(el);
        if (el.firstElementChild && !num) {
            badi = el.firstElementChild;
        } else if (el.previousElementSibling){
            badi = el.previousElementSibling
        } else {
            if (el.parentElement.previousElementSibling) {
                badi = el.parentElement.previousElementSibling;
                num = 0;
            } else {
                badi = el.parentElement;
                num = 1;
            }
        }
    }

    buttonNext.addEventListener('click', () => {

        nextrecursion(badi)
    })

    buttonPrev.addEventListener('click', () => {

        prevrecursion(badi)
    })

}

// makeOverdose();


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

function ChangePicture() {
    this.arr = ['https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',
        'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg'];
    this.i = 0;
    this.img = document.querySelector('img');


    this.nextPicture = function ()  {

        if (this.i === this.arr.length - 1) {
            this.img.src = this.arr[this.i];

            this.i = 0;
        } else {
            this.img.src = this.arr[this.i];
            this.i = this.i + 1;
        }
    }

    this.prevPicture = function () {

        if (this.i === 0) {
            this.img.src = this.arr[this.i];

            this.i = this.arr.length - 1;
        } else {
            this.img.src = this.arr[this.i];
            this.i = this.i - 1;
        }
    }
}

let prevBtn = document.createElement('button');
prevBtn.textContent = "PREVious";
document.body.append(prevBtn)
let nextBtn = document.createElement('button');
nextBtn.textContent = "NEXTous";
document.body.append(nextBtn)

let pictures = new ChangePicture();
prevBtn.addEventListener('click', () => {
    pictures.prevPicture.bind(pictures)();
})

nextBtn.addEventListener('click', () => {
    pictures.nextPicture.bind(pictures)();
})


