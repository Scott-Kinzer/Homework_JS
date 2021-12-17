// function allMyDay() {
//     standUp(() => {
//         eat( () => {
//             study(() => {
//                 doSomeFun(() => {
//                     makeLunch(() => {
//                         playGame();
//                     })
//                 });
//             });
//         });
//     })
// }
//
// function standUp(eat) {
//     console.log('stand up');
//     eat()
// }
//
// function eat(study) {
//     console.log('eat');
//     study();
// }
//
//
// function study(doSomeFun) {
//     console.log('study');
//
//     doSomeFun();
// }
//
// function doSomeFun(makeLunch) {
//     console.log('do some fun');
//
//     setTimeout(makeLunch, 3000)
// }
//
// function makeLunch(playGame) {
//     console.log('make lunch');
//
//     playGame();
// }
//
//
// function playGame() {
//     console.log('go home');
// }
//
// allMyDay();



//
// function standUp() {
//     console.log('stand up');
//
// }
//
// function eat() {
//     console.log('eat');
//
// }
//
//
// function study() {
//     console.log('study');
//
//
// }
//
// function doSomeFun() {
//     console.log('do some fun');
//
//
// }
//
// function makeLunch() {
//     console.log('make lunch');
//
//
// }
//
//
// function playGame() {
//     console.log('go home');
// }
//
// function allMyDay() {
//     return new Promise((res, ) => {
//         res('All my day');
//     })
// }
//
// allMyDay()
//     .then(() => {
//         return new Promise((res,) => {
//             setTimeout(() => {
//                 standUp();
//                 res();
//             }, 3000)
//         })
//     }).then(() => {
//     eat()
// }).then(() => {
//     study()
// }).then(() => {
//     return new Promise((res,) => {
//         setTimeout(() => {
//             doSomeFun()
//             res();
//         }, 3000)
//     })
// }).then(() => {
//     makeLunch()
// }).then(() => {
//     playGame();
// })



function standUp() {

    return new Promise(function(resolve) {
        console.log('stand up');
        setTimeout(resolve, 2000);
    });
}

function eat() {
    console.log('eat');

}


function study() {
    console.log('study');


}

function doSomeFun() {
    console.log('do some fun');


}

function makeLunch() {
    console.log('make lunch');


}


async function playGame() {
    return new Promise(function(resolve) {
        console.log('go home');
        setTimeout(resolve, 2000);
    });
}




async function allMyDay() {
    await standUp();
    await eat();
    await study();
    await doSomeFun();
    await makeLunch();
    await playGame();
}

allMyDay();