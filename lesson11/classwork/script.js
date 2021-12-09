
// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні
// на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно
// вивест в документ всіх обраних на попередньому етапі.


function chooseFavoriteCards() {
    let wrapper = document.createElement('div');
    wrapper.style.margin = '0 auto';
    wrapper.style.width = '1140px';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.flexWrap = 'wrap';
    document.body.append(wrapper);

    for (let item of users) {


        let {name, age, status} = item;
        let card = document.createElement('div');
        card.style.width = '300px';
        card.style.background = 'blue';
        card.style.minHeight = '100px';
        let button = document.createElement('button');
        button.style.margin = '0 auto';
        button.style.display = 'block';
        card.style.color = 'white';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'center';
        card.style.alignItems = 'center';
        button.style.minWidth = '50px';
        // button.style.height = '20px';
        button.textContent = 'ADD TO FAVORITE';
        card.innerHTML = `
            <div>
            <div>${name}</div>
            <div>${age}</div>
            <div>${status}</div>
            </div>
        `


        card.append(button);
        card.style.margin = '10px';
        wrapper.append(card);

        button.addEventListener('click', () => {


            let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
            if(existingEntries == null) existingEntries = [];

            if (!existingEntries.map(item => item.name).includes(item.name)) {
                existingEntries.push(item)
            }


            localStorage.setItem("allEntries", JSON.stringify(existingEntries));


        })

    }
}

chooseFavoriteCards();