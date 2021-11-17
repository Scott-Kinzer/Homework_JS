// - створити функцію яка обчислює та повертає площу прямокутника висотою

function calcRectangle(h,w) {
    return h * w;
}

// - створити функцію яка обчислює та повертає площу кола

const PI = 3.14;
function calcCircle(r) {
    return PI * r**2;
}

// - створити функцію яка обчислює та повертає площу циліндру

function calcCylinder(r, h) {
    return 2*PI*r*(r + h);
}

// - створити функцію яка приймає масив та виводить кожен його елемент

// function iterateArr(arr) {
//      arr.forEach(item => console.log(item));
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function setParagraph(text) {
    let p = document.createElement('p');
    p.innerText = text;
    return p;
}

// console.log(setParagraph("Test text"));


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function makeUlTemplate(liText) {
    let ul = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent = liText;
        ul.append(li);
    }

    return ul;
}

// console.log(makeUlTemplate("Li text"));


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function makeUlTemplate_2 (liText, liNum) {
    let ul = document.createElement('ul');

    for (let i = 0; i < liNum; i++) {
        let li = document.createElement('li');
        li.textContent = liText;
        ul.append(li);
    }

    return ul;
}

// console.log(makeUlTemplate_2("lala", 50));


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let dataArray = [
    {
        id: 1,
        name: "Okten",
        age: 6
    },

    {
        id: 2,
        name: "Sasha",
        age: 20
    },

    {
        id: 3,
        name: "Bob",
        age: 25
    }
]

let wrapperForData = document.createElement('div');

function showDataInHTML(data) {
    wrapperForData.innerText = "";
    for (let item of data) {
        let ItemWrapper = document.createElement('div');
        ItemWrapper.classList.add('obj_block');

        ItemWrapper.innerHTML += `
            <h2>${item.id}</h2>
            <h3>${item.name}</h3>
            <h4>${item.age}</h4>
        `
        wrapperForData.append(ItemWrapper);
    }

    document.getElementsByTagName('body')[0].append(wrapperForData);
}


showDataInHTML(dataArray);
showDataInHTML(dataArray);
showDataInHTML(dataArray);




