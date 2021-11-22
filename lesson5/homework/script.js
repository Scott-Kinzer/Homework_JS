// - створити функцію яка обчислює та повертає площу прямокутника висотою

const calcRectangle = (h, w) => {
    return h ? w ? h * w : "Enter w" : "Enter h";
}

// console.log(calcRectangle(4))

// - створити функцію яка обчислює та повертає площу кола

const PI = 3.14;
const calcRound = (r) => {
    return r ? PI * r**2 : "Enter radius";
}

// console.log(calcRound(5))

// - створити функцію яка обчислює та повертає площу циліндру

const calcCylinder = (h, r) => {
    return h && r ? (2*PI * r * h) + 2*PI*r**2 : "Enter h or r";
}

// console.log(calcCylinder(5,3))

// - створити функцію яка приймає масив та виводить кожен його елемент

const itarationFunc = (arr) => {
    arr.forEach(item => {
        console.log(item);
    })
}

// itarationFunc([4,6,3,6,2])

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

const makeP = (text) => {
    return `<p>${text}</p>`
}

// console.log(makeP("h"));


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let UlFunc = (text) => {
    let ul = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.append(li);
    }

    return ul;
}

// console.log(UlFunc("text"));


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let UlFunc_2 = (text, num) => {
    let ul = document.createElement('ul');

    for (let i = 0; i < num; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.append(li);
    }

    return ul;
}

// console.log(UlFunc_2("text", 5));


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let UlFunc_3 = (arr) => {
    let ul = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.append(li);
    }

    return ul;
}

// console.log(UlFunc_3([5,2,5,7,"stri", true]));



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


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

let showDataInHTML = (data) => {
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







