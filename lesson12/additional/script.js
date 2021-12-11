async function doFetch() {
    let wrapper = document.querySelector('.wrapper');
    let container = document.querySelector('.container');
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json());



    for (let item of data) {

        let overWrap = document.createElement('div');
        overWrap.classList.add('overwrap');

        let addPosts = document.createElement('div');
        addPosts.classList.add('hidden');
        async function showComments(id, commentOverWrap) {
            commentOverWrap.innerHTML = '';
            let comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(posts => posts.json());
            console.log(comments)
            for (let i of comments) {


                let ul = document.createElement('ul');
                ul.classList.add('list-group');


                let liTwo = document.createElement('li');
                liTwo.classList.add('list-group-item');
                liTwo.textContent = `COMMENT`;
                ul.append(liTwo)
                let liThree = document.createElement('li');
                liThree.classList.add('list-group-item');
                liThree.textContent = `${i.postId}`;
                ul.append(liThree)
                let liFour = document.createElement('li');
                liFour.classList.add('list-group-item');
                liFour.textContent = `${i.name}`;
                ul.append(liFour)
                let liFive = document.createElement('li');
                liFive.classList.add('list-group-item');
                liFive.textContent = `${i.email}`;
                ul.append(liFive)
                let liSix = document.createElement('li');
                liSix.classList.add('list-group-item');
                liSix.textContent = `${i.body}`;
                ul.append(liSix)
                commentOverWrap.append(ul);
            }

        }
        
        async function showPosts(id) {

            addPosts.innerHTML = '';
            let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(posts => posts.json());


            for (let z of posts) {


                let ul = document.createElement('ul');
                ul.classList.add('list-group');
                ul.classList.add('cardPost');

                ul.style.height = '100%';

                let liTwo = document.createElement('li');
                liTwo.classList.add('list-group-item');
                liTwo.textContent = `POST`;
                ul.append(liTwo)
                let liThree = document.createElement('li');
                liThree.classList.add('list-group-item');
                liThree.textContent = `${z.userId}`;
                ul.append(liThree)
                let liFour = document.createElement('li');
                liFour.classList.add('list-group-item');
                liFour.textContent = `${z.id}`;
                ul.append(liFour)
                let liFive = document.createElement('li');
                liFive.classList.add('list-group-item');
                liFive.textContent = `${z.title}`;
                ul.append(liFive)
                let liSix = document.createElement('li');
                liSix.classList.add('list-group-item');
                liSix.textContent = `${z.body}`;
                ul.append(liSix);

                let commentOverWrap = document.createElement('div');
                addPosts.classList.add('flexItem');
                commentOverWrap.classList.add('hidden');

                let btnShowComments = document.createElement('button');
                btnShowComments.classList.add('btn-success');
                btnShowComments.classList.add('btn');
                btnShowComments.textContent = 'SHOW commentslla';

                ul.append(btnShowComments);

                ul.append(commentOverWrap);
                addPosts.append(ul);


                btnShowComments.addEventListener('click', async  () => {
                    commentOverWrap.classList.toggle('hidden');
                    await showComments(z.id, commentOverWrap)

                })

            }

        }


        overWrap.innerHTML +=  `<div class="card " >
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">USER_ID ${item.id}</li>
                            <li class="list-group-item">ID_ ${item.username}</li>
                            <li class="list-group-item">TITLE ${item.email}</li>
                         
                      </div>`;


        let btnShowPosts = document.createElement('button');
        btnShowPosts.classList.add('btn-success');
        btnShowPosts.classList.add('btn');
        btnShowPosts.textContent = 'SHOW POSTS';
        overWrap.append(btnShowPosts);
        wrapper.append(overWrap);
        overWrap.append(addPosts);




        btnShowPosts.addEventListener('click', async () => {
            await showPosts(item.id)
            addPosts.classList.toggle('hidden');

        })

    }

    container.append(wrapper);
}

doFetch();