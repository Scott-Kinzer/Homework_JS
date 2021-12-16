window.onload = async () => {

    const idPostFromUrl = +window.location.hash.replace(/\D/g, '');

    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPostFromUrl}`)
        .then(userInfo => userInfo.json());

    let postCardDetail = document.createElement('div');
    postCardDetail.classList.add('post-card');
    let wrapper = document.querySelector('.wrapper');
    const {userId, id, title, body} = post;

     postCardDetail.innerHTML = `
                <div class= "user-id">USER-ID ${userId}</div>
                <div class="id">ID ${id}</div>
                <div class="title">TITLE ${title}</div>
                <div class="body">BODY ${body}</div>
    `;



    let showComments = document.createElement('button');
    showComments.textContent = 'show comments of post';
    showComments.classList.add('comments-btn');
    let buttonShowHideComments = document.createElement('button');
    buttonShowHideComments.style.background = 'purple';
    buttonShowHideComments.textContent = 'show or hide comments';
    buttonShowHideComments.classList.add('hidden');
    buttonShowHideComments.classList.add('show-hide');
    postCardDetail.append(buttonShowHideComments);
    postCardDetail.append(showComments)
    let commentsContainer = document.createElement('div');

    showComments.addEventListener('click', async function ()  {

        commentsContainer.innerHTML = ``;
        let commentsGarbage = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(data => data.json());

        for (let comment of commentsGarbage) {
            const {postId, id, name, email, body} = comment;

            let commentGroup = document.createElement('div');
            commentGroup.classList.add('card');
            commentGroup.innerHTML = `
                    <div>POSTID: ${postId}</div>
                    <div>ID: ${id}</div>
                    <div>NAME: ${name}</div>
                    <div>EMAIL: ${email}</div>
                    <div>BODY: ${body}</div>

            `;

            commentsContainer.append(commentGroup);
        }

        this.setAttribute('disabled', true);
        this.style.background = 'red';

        if (commentsGarbage) {
            buttonShowHideComments.classList.remove('hidden');
        }

    });

    buttonShowHideComments.addEventListener('click', () => {
        commentsContainer.classList.toggle('hidden');
    })
    buttonShowHideComments.style.marginBottom = '10px';


    wrapper.append(postCardDetail);

    wrapper.append(commentsContainer);

}