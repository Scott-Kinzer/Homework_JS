


let loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => json).then(items => beautifyElements(items))
}

let beautifyElements = (dataArr) => {
    let list_wrapper = document.getElementById('list_wrapper');
    list_wrapper.style.justifyContent = 'center';

    showData(dataArr, list_wrapper);


    let input1 = document.createElement('input');
    input1.classList.add('input');

    let input2 = document.createElement('input');
    input2.classList.add('input1');
    let input3 = document.createElement('input');
    input3.classList.add('input2');

    let input4 = document.createElement('input');
    input4.classList.add('input3');

    let input5 = document.createElement('input');
    input5.classList.add('input4');

    let input6 = document.createElement('input');
    input6.classList.add('input5');

    let input7 = document.createElement('input');
    input7.classList.add('input6');

    let input8 = document.createElement('input');
    input8.classList.add('input7');

    let input9 = document.createElement('input');
    input9.classList.add('input8');

    let input10 = document.createElement('input');
    input10.classList.add('input9');

    let input11 = document.createElement('input');
    input11.classList.add('input10');

    let input12 = document.createElement('input');
    input12.classList.add('input11');

    let input13 = document.createElement('input');
    input13.classList.add('input12');

    let input14 = document.createElement('input');
    input14.classList.add('input13');

    let input15 = document.createElement('input');
    input15.classList.add('input14');



    let wrapperInputs = document.createElement('div');

    let title_ = document.createElement('h4');
    title_.textContent = "Enter data to edit";
    wrapperInputs.style.position = 'absolute';
    wrapperInputs.style.top = '20px';
    wrapperInputs.style.display = 'flex';
    wrapperInputs.style.flexDirection = 'column';

    wrapperInputs.append(title_, input2, input3, input4, input5, input6, input7, input8, input9, input10,
    input11, input12, input13, input14, input15)
    document.body.append(wrapperInputs)


}

loadUsers();

let editUser = async ({userId, input2, input3, input4, address: {input5, input6, input7, input8, geo: {input9, input10}},
                          input11, input12, company: {input13, input14, input15}}) => {
    console.log(userId);
    let obj = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(
            {
                id: userId,
                name: input2,
                username: input3,
                email: input4,
                address: {
                    street: input5,
                    suite: input6,
                    city: input7,
                    zipcode: input8,
                    geo: {
                        lat: input9,
                        lng: input10
                    }
                },
                phone: input11,
                website: input12,
                company: {
                    name: input13,
                    catchPhrase: input14,
                    bs: input15
                }
            }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }

    })
        .then((response) => response.json())
        .then((json) => json);
    return obj;
}

let deleteUser = async (id) => {
    let del = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
    })
        .then(data => data.json()).then(item => item);

    return del;
}


function createLoader() {

    let overlay_loader = document.createElement('div');
    overlay_loader.classList.add('overlay-loader');

    let loader = document.createElement('div');
    loader.classList.add('loader');
    overlay_loader.append(loader);
    for (let i =0; i < 6; i++) {
        let d = document.createElement('div')
        loader.append(d);
    }

    return overlay_loader;
}

function showData(dataArr , list_wrapper) {

    for (let user of dataArr) {

        let {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone, website, company: {name_, catchPhrase, bs}} = user;
        let div = document.createElement('div');
        div.style.minHeight = '500px';
        div.style.borderRadius = '10px';
        div.style.padding = '10px';

        let li_ten = document.createElement('li');
        li_ten.classList.add('eleven_li');
        li_ten.textContent = "ID:  " + id;
        li_ten.style.marginTop = '10px';
        div.append(li_ten);

        div.classList.add('user_fromServer');
        let li_one = document.createElement('li');
        li_one.classList.add('first_li');
        li_one.textContent = "Name:  " + name;
        li_ten.style.marginTop = '10px';

        div.append(li_one);

        let li_two = document.createElement('li');
        li_two.classList.add('two_li');
        li_two.textContent = "Username:  " + username;
        li_two.style.marginTop = '10px';

        div.append(li_two);


        let li_three = document.createElement('li');
        li_three.classList.add('three_li');
        li_three.textContent ="Email:  " + email;
        li_three.style.marginTop = '10px';

        div.append(li_three);

        let li_four = document.createElement('li');
        li_four.classList.add('four_li');
        li_four.textContent = "Street:  " + street;
        li_four.style.marginTop = '10px';

        div.append(li_four);

        let li_five = document.createElement('li');
        li_five.classList.add('five_li');
        li_five.textContent = "Suite:  " + suite;
        li_five.style.marginTop = '10px';

        div.append(li_five);

        let li_six = document.createElement('li');
        li_six.classList.add('six_li');
        li_six.textContent ="City:  " + city;
        li_six.style.marginTop = '10px';

        div.append(li_six);

        let li_seven = document.createElement('li');
        li_seven.classList.add('seven_li');
        li_seven.textContent = "ZipCode:  " + zipcode;
        li_seven.style.marginTop = '10px';

        div.append(li_seven);

        let li_eight = document.createElement('li');
        li_eight.classList.add('nine_li');
        li_eight.textContent = "lat:  " + lat;
        li_eight.style.marginTop = '10px';

        div.append(li_eight);

        let li_nine = document.createElement('li');
        li_nine.classList.add('ten_li');
        li_nine.textContent = "lng:  " + lng;
        li_nine.style.marginTop = '10px';

        div.append(li_nine);

        let li_twelve = document.createElement('li');
        li_twelve.classList.add('ten_li');
        li_twelve.textContent = "phone:  " + phone;
        li_twelve.style.marginTop = '10px';

        div.append(li_twelve);

        let li_13 = document.createElement('li');
        li_13.classList.add('ten_li');
        li_13.textContent = "website:  " + website;
        li_13.style.marginTop = '10px';

        div.append(li_13);

        let li_14 = document.createElement('li');
        li_14.classList.add('ten_li');
        li_14.textContent = "name_:  " + name_;
        li_14.style.marginTop = '10px';

        div.append(li_14);

        let li_15 = document.createElement('li');
        li_15.classList.add('ten_li');
        li_15.textContent = "catch:  " + catchPhrase;
        li_15.style.marginTop = '10px';

        div.append(li_15);

        let li_16 = document.createElement('li');
        li_16.classList.add('ten_li');
        li_16.textContent = "bs:  " + bs;
        li_16.style.marginTop = '10px';

        div.append(li_16);



        let buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'EDIT';

        let buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'REMOVE';

        let k = createLoader();
        div.append(k);
        let userId = id;


        buttonEdit.addEventListener('click', async () => {
            k.classList.add('active');


            let input2 = document.querySelector('.input1').value;
            let input3 = document.querySelector('.input2').value;
            let input4 = document.querySelector('.input3').value;
            let input5 = document.querySelector('.input4').value;
            let input6 = document.querySelector('.input5').value;
            let input7 = document.querySelector('.input6').value;
            let input8 = document.querySelector('.input7').value;
            let input9 = document.querySelector('.input8').value;
            let input10 = document.querySelector('.input9').value;
            let input11 = document.querySelector('.input10').value;
            let input12 = document.querySelector('.input11').value;
            let input13 = document.querySelector('.input12').value;
            let input14 = document.querySelector('.input13').value;
            let input15 = document.querySelector('.input14').value;

            let dataGet = await editUser({userId, input2, input3, input4, address: {input5, input6, input7, input8, geo: {input9, input10}},
                input11, input12, company: {input13, input14, input15}});


           let  {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}},
                phone, website, company: {name_, catchPhrase, bs}} = dataGet;

            li_ten.textContent = "ID:  " + id;

            li_one.textContent = "Name:  " + name;

            li_two.textContent = "Username:  " + username;

            li_three.textContent ="Email:  " + email;

            li_four.textContent = "Street:  " + street;

            li_five.textContent = "Suite:  " + suite;

            li_six.textContent ="City:  " + city;

            li_seven.textContent = "ZipCode:  " + zipcode;

            li_eight.textContent = "lat:  " + lat;

            li_nine.textContent = "lng:  " + lng;

            li_twelve.textContent = "phone:  " + phone;

            li_13.textContent = "website:  " + website;

            li_14.textContent = "name_:  " + name_;

            li_15.textContent = "catch:  " + catchPhrase;

            li_16.textContent = "bs:  " + bs;


            k.classList.remove('active');

        })

        buttonRemove.addEventListener('click', async  function () {
            k.classList.add('active');
            let numberOfUser = user.id;
            let x = await deleteUser(numberOfUser);
            this.parentElement.remove();
            k.classList.remove('active');
        })


        div.append(buttonEdit);
        div.append(buttonRemove);


        list_wrapper.append(div);
    }




}