window.onload = async () => {

    const idPostFromUrl = +window.location.hash.replace(/\D/g, '');

    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPostFromUrl}`)
        .then(userInfo => userInfo.json());

    let postCardDetail = document.createElement('div');
    let wrapper = document.querySelector('.wrapper');
    const {userId, id, title, body} = post;

     postCardDetail.innerHTML = `
                <div> ${userId}</div>
                <div> ${id}</div>
                <div> ${title}</div>
                <div> ${body}</div>
    `;



    let showComments = document.createElement('button');
    showComments.textContent = 'show comments of post';
    postCardDetail.append(showComments)
    let commentsContainer = document.createElement('div');
    showComments.addEventListener('click', async () => {
        commentsContainer.innerHTML = ``;
        let commentsGarbage = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(data => data.json());

        for (let comment of commentsGarbage) {
            const {postId, id, name, email, body} = comment;

            let commentGroup = document.createElement('div');

            commentGroup.innerHTML = `
                    <div>${postId}</div>
                    <div>${id}</div>
                    <div>${name}</div>
                    <div>${email}</div>
                    <div>${body}</div>

            `;

            commentsContainer.append(commentGroup);
        }
    });


    wrapper.append(postCardDetail);
    wrapper.append(commentsContainer);

}