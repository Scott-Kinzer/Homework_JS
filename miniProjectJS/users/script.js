window.onload = async () => {
   let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(dataUsers => dataUsers.json());
    console.log(users);

    let wrapper = document.querySelector('.wrapper');
    for (let user of users) {
        let userCard = document.createElement('div');
        userCard.classList.add('user-card');
        let userId = document.createElement('div');
        let userName = document.createElement('div');

        userId.textContent = user.id;
        userName.textContent = user.name;

        let userHref = document.createElement('a');
        userHref.textContent = 'User details';

        userHref.href = `../userDetails/user.html${"#"+user.id}`;

        let userBtn = document.createElement('button');

        userBtn.addEventListener('click', () => {
            window.location.replace(`../userDetails/user.html${"#"+"userDetails/"+user.id}`);

        })

        userCard.append(userId, userName, userHref, userBtn);
        wrapper.append(userCard);

    }

}