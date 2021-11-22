// - Дано натуральное число n. Выведите все числа от 1 до n.

const showFunc = (n, k) => {
    console.log(k);
    if (k === n) {
        return
    }
    k++;
    showFunc(n, k)
}

// showFunc(6, 1);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
//
const sortDependencies = (a, b) => {
    if (a > b) {
        for (let k = a; k >= b; k--) {
            console.log(k)
        }
    } else {
        for (let k = a; k <= b; k++) {
            console.log(k)
        }
    }
}

// sortDependencies(1,3)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const swapping = (arr, num) => {
    let temp = arr[num];
    arr[num] = arr[num + 1];
    arr[num + 1] = temp;
    return arr;
}

// console.log(swapping([9,8,0,4], 2))


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


const arr = (arr_arg) => {
    let arr = [...arr_arg]
    let lenArr = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i]);
            for (let b = i; b < arr.length; b++) {
                arr[b] = arr[b + 1];
                if (!(arr[b + 1]) && arr[b + 1]!== 0 && b === lenArr) {
                    break
                }
            }
            i--;
        }
        if (i === lenArr) {
            break
        }
    }
    return arr.filter(item => item !== undefined);
}


let arr_2 = (arr) => {
    let testArr = [];
    let zeroArr = [];
    for (let item of arr) {
        if (item) {
            testArr.push(item);
        } else {
            zeroArr.push(item)
        }
    }

    return [...testArr, ...zeroArr];
}

// console.log(arr([1,0,6,0,3]));
// console.log(arr_2([1,0,6,0,3]));

