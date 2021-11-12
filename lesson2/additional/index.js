// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.


let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log("Big array!");
} else {
    console.log("Small array..");
}

//   - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let arr = [44,200,105];


let avaragePosition = arr[Math.floor(arr.length / 2)];
console.log(avaragePosition);

if (arr[0] > arr[1] || arr[0] > arr[2]) {
    if (arr[0] < arr[1] || arr[0] < arr[2]) {
        console.log(arr[0]);
    } else if (arr[1] > arr[0] || arr[1] > arr[2]) {
        if (arr[1] < arr[0] || arr[1] < arr[2]) {
            console.log(arr[1]);
        }
    } else {
        console.log(arr[2]);
    }

} else if (arr[1] > arr[0] || arr[1] > arr[2]) {
    if (arr[1] < arr[0] || arr[1] < arr[2]) {
        console.log(arr[1]);
    } else  {
            console.log(arr[2]);
    }
} else {
        console.log(arr[2]);
}


//   - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }


let a = 0;
let b = 1;

let result = a + b < 4 ? "Мало" : "Багато"
console.log(result);


//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let randNum = -5;

let ans = randNum < 0 ? "less than 0" : randNum > 0 ? "bigger than 0" : "equal to 0";
console.log(ans);


