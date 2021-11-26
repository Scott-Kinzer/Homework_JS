// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (name, id, surname, email, phone) {
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let emptyArrUsrs = [
    new User("name", 1, "surname", "email", "phone"),
    new User("name", 2, "surname", "email", "phone"),
    new User("name", 3, "surname", "email", "phone"),
    new User("name", 4, "surname", "email", "phone"),
    new User("name", 5, "surname", "email", "phone"),
    new User("name", 6, "surname", "email", "phone"),
    new User("name", 7, "surname", "email", "phone"),
    new User("name", 8, "surname", "email", "phone"),
    new User("name", 9, "surname", "email", "phone"),
    new User("name", 10, "surname", "email", "phone"),
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterArrId = emptyArrUsrs.filter(item => !(item.id % 2));
// console.log(filterArrId)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedArr = filterArrId.sort((a, b) => a.id - b.id);
// console.log(sortedArr)


// - створити класс для об'єктів Client з полями id, name, surname ,
// email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(name, id, surname, email, phone) {
        this.name = name;
        this.id = id;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}


let emptyArrClnts = [
    new Client("name", 1, "surname", "email", "phone"),
    new Client("name", 2, "surname", "email", "phone"),
    new Client("name", 3, "surname", "email", "phone"),
    new Client("name", 4, "surname", "email", "phone"),
    new Client("name", 5, "surname", "email", "phone"),
    new Client("name", 22, "surname", "email", "phone"),
    new Client("name", 7, "surname", "email", "phone"),
    new Client("name", 8, "surname", "email", "phone"),
    new Client("name", 9, "surname", "email", "phone"),
    new Client("name", 10, "surname", "email", "phone"),
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)


let sortedArrClnts = emptyArrClnts.sort((a, b) => a.id - b.id);
// console.log(sortedArrClnts);


