// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//     і додає його в поточний об'єкт car

function Car (model, factory, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.factory = factory;
        this.year = year;
        this.max_speed = maxSpeed;
        this.volume = volumeEngine;

        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.max_speed} на годину `);
        }

        this.info = function () {
            console.log(
                `Модель - ${this.model}
                 Factory - ${this.factory}
                 Year - ${this.year}
                 MaxSpeed - ${this.max_speed}
                 Volume - ${this.volume}
                 ${this.newDriver ? this.newDriver : "No driver"}
                `
            )
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.max_speed = newSpeed;
        }

        this.changeYear = function (newValue) {
            this.year = newValue;
        }

        this.addDrive = function (driver) {
            this.newDriver = driver;
        }
}

// let car = new Car("BMW", "BMW_FACTORY", 2016, 230, 3);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає
//     його в поточний об'єкт car

class CarCreator {
    constructor(model, factory, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.factory = factory;
        this.year = year;
        this.max_speed = maxSpeed;
        this.volume = volumeEngine;
    }

    drive () {
        console.log(`Їдемо зі швидкістю ${this.max_speed} на годину `);
    }

    info () {
        console.log(
            `Модель - ${this.model}
                 Factory - ${this.factory}
                 Year - ${this.year}
                 MaxSpeed - ${this.max_speed}
                 Volume - ${this.volume}
                 ${this.newDriver ? this.newDriver : "No driver"}
                `
        )
    }

    increaseMaxSpeed (newSpeed) {
        this.max_speed = newSpeed;
    }

    changeYear (newValue) {
        this.year = newValue;
    }

    addDrive  (driver) {
        this.newDriver = driver;
    }

}

// let car = new CarCreator("Mercedes", "MERCEDES_FACTORY", 2016, 230, 3);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.foot = footSize;
}

function Prince (name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoe = shoeSize;
}

let prince = new Prince("Bob", 25, 33);

let arrCinderella = [
    new Cinderella("Anny", 25, 35),
    new Cinderella("Anny", 25, 34),
    new Cinderella("Lili", 25, 36),
    new Cinderella("Anny", 25, 34),
    new Cinderella("Kate", 25, 30),
    new Cinderella("Anny", 25, 40),
    new Cinderella("Bony", 25, 39),
    new Cinderella("Anny", 25, 38),
    new Cinderella("Anny", 25, 35),
    new Cinderella("Taylor", 25, 33),
]

for (let girl of arrCinderella) {
    if (prince.shoe === girl.foot) {
        console.log(
            `
            Prince ${prince.name} should be with ${girl.name};
            `
        )
    }
}

let rightGirl = arrCinderella.find(girl =>  girl.foot === prince.shoe);
// console.log(rightGirl);