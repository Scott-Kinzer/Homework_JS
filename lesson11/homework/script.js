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
        let [model, ite, volume] = document.querySelectorAll('input');
        console.log(model.value, ite.value, volume.value);


        let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];

        existingEntries.push({model: model.value, type: type.value, volume: volume.value})

        localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        setTimeout(() =>
            {
                console.log(localStorage.getItem("allEntries"))
            }, 5000
        )

    })

}

loadLocalStorage();



let [firstInput, secondInput] = document.querySelectorAll('input');

let obj = {
    name: firstInput.value,
    age: secondInput.value
}



localStorage.setItem('Lala', JSON.stringify(obj));
