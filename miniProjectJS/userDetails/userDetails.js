window.onload = async () => {

    const idUserFromUrl = +window.location.hash.replace(/\D/g, '');

    let user = await fetch(`https://jsonplaceholder.typicode.com/users/${idUserFromUrl}`)
        .then(userInfo => userInfo.json());

    const {id, name, username, email, address:{street, suite, city,
    zipcode, geo: {lat, lng}},   phone, website, company: {catchPhrase, bs}} = user;

    let wrapper = document.querySelector('.wrapper');
    let infoUserCard = document.createElement('div');
    infoUserCard.classList.add('user-card');
    infoUserCard.innerHTML = `
         <div>
           <ul>
           <li>ID: ${id}</li>
           <li>NAME: ${name}</li>
           <li>USERNAME: ${username}</li>
           <li>EMAIL: ${email}</li>
           <li>
           ADDRESS
           <ul>
           <li>STREET: ${street}</li>
           <li>SUITE: ${suite}</li>
           <li>CITY: ${city}</li>
           <li>ZIPCODE: ${zipcode}</li>
           <li>
           GEO
           <ul>
           <li>LAT: ${lat}</li>
           <li>LNG: ${lng}</li>
</ul>
</li>
</ul>
</li>
           <li>PHONE: ${phone}</li>
           <li>WEBISTE: ${website}</li>
           <li>
           <ul>
           <li>NAME: ${name}</li>
           <li>CATCH: ${catchPhrase}</li>
           <li>BS: ${bs}</li>
</ul>
</li>
</ul>
            </div>
    `;

    let buttonPosts = document.createElement('button');
    buttonPosts.textContent = 'post of current user';
    infoUserCard.append(buttonPosts);
    wrapper.append(infoUserCard);

    buttonPosts.classList.add('btn');
    buttonPosts.classList.add('btn-success');

    buttonPosts.addEventListener('click', async () => {

        let posts = document.querySelector('.posts');
        posts.innerHTML = '';
        let postsOfUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(data => data.json());
        console.log(postsOfUser);

        for (let post of postsOfUser) {
            let titleWrapper = document.createElement('div');
            titleWrapper.classList.add('title-wrapper')
            let title = document.createElement('div');
            title.classList.add('title');
            title.textContent = post.title;

            let buttonShowDetails = document.createElement('button');
            buttonShowDetails.textContent = 'show post details';
            buttonShowDetails.classList.add('btn');
            buttonShowDetails.classList.add('btn-secondary');
            titleWrapper.append(title, buttonShowDetails);
            buttonShowDetails.addEventListener('click', () => {
                window.location.assign(`../postDetails/index.html${"#"+"postDetails/"+post.id}`);
            });

            posts.append(titleWrapper);

        }

    })

    console.log(idUserFromUrl);
}