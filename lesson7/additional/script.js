// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

function ObjTemplate (id, name, username, email, street, suite, city, zipcode, lat, lng,
                    phone, website, name_company, catchPhrase, bs) {

    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.lat = lat;
    this.lng = lng;
    this.phone = phone;
    this.website = website;
    this.name_company = name_company;
    this.catch = catchPhrase;
    this.bs = bs;

    this.createObj = function () {
        return {
            id: this.id,
            name: this.name,
            username: this.username,
            email: this.email,
            address: {
                street: this.street,
                suite: this.suite,
                city: this.city,
                zipcode: this.zipcode,
                geo: {
                    lat: this.lat,
                    lng: this.lng
                }
            },
            phone: this.phone,
            website: this.website,
            company: {
                name: this.name_company,
                catchPhrase: this.catch,
                bs: this.bs
            }
        }
    }
}

let temp = new ObjTemplate(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets')

// temp.createObj()


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

function Tag(name, action, attr) {
    this.name = name
    this.action = action
    this.attr = attr

    this.describe = function () {
        return {
            titleOfTag: this.name,
            action: this.action,
            attrs: [...this.attr]
        }
    }
}
//
// let tag = new Tag("a", "Тег a является одним из важных элементов HTML и предназначен для создания ссылок",
//     [
//         {titleOfAttr: "rel", actionOfAttr: "Отношения между ссылаемым и текущим документами."},
//         {titleOfAttr: "shape", actionOfAttr: "Задает форму активной области ссылки для изображений."},
//     ])


// tag.describe()

let div = new Tag("div", "Элемент является блочным элементом и предназначен для выделения фрагмента " +
    "документа с целью изменения вида содержимого.",
    [
        {titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега div."},
        {titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."},
    ])

// div.describe()
//
let h1 = new Tag("h1", "Так, тег h1 представляет собой наиболее важный заголовок первого уровня",
    [
        {titleOfAttr: "align", actionOfAttr: "Определяет выравнивание заголовка."},
    ])

// h1.describe();

let span = new Tag("span", "Тег span предназначен для определения строчных элементов документа",
    [
        {titleOfAttr: " ", actionOfAttr: "Для этого тега доступны универсальные атрибуты и события"},
    ])

// span.describe()





