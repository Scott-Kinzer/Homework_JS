// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage;

// let loadLocalStorage = () => {
//     let form = document.createElement('form');
//
//     let name = document.createElement('input');
//     let age = document.createElement('input');
//     let submit = document.createElement('button');
//     submit.textContent = "SUBMIT"
//     form.append(name, age, submit)
//     document.body.append(form);
//
//     submit.addEventListener('click', (e) => {
//         e.preventDefault();
//         localStorage.setItem("InfoUser", JSON.stringify({
//             name: name.value,
//             age: age.value
//         }))
//     })
//
// }

// loadLocalStorage();


// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.



let loadLocalStorage = () => {
    let form = document.createElement('form');

    let model = document.createElement('input');
    let type = document.createElement('input');
    let volume = document.createElement('input');

    let submit = document.createElement('button');

    submit.textContent = "SUBMIT"
    form.append(model, type, volume,submit)
    document.body.append(form);

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        localStorage.setItem("ArrayOfDataCar",JSON.stringify([...inputs].map(item => item.value)))

        setTimeout(() =>
            {
                console.log(localStorage.getItem("ArrayOfDataCar"))
            }, 5000
        )

    })

}

// loadLocalStorage();