window.onload = async () => {
   let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(dataUsers => dataUsers.json());
    console.log(users);

    let wrapper = document.querySelector('.wrapper');
    for (let user of users) {
        let userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.classList.add('card');
        let userId = document.createElement('div');
        let userName = document.createElement('div');
        userName.classList.add('card-header');
        userId.textContent = user.id;
        userName.textContent = user.name;

        let userBtn = document.createElement('button');
        userBtn.textContent = 'USER DETAILS';
        userBtn.classList.add('btn-info');
        userBtn.classList.add('btn');
        userBtn.addEventListener('click', () => {
            window.location.assign(`../userDetails/user.html${"#"+"userDetails/"+user.id}`);

        })

        userCard.append(userId, userName, userBtn);
        wrapper.append(userCard);

    }

}