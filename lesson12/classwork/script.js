async function doFetch() {
    let wrapper = document.querySelector('.wrapper');
    let container = document.querySelector('.container');
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json());

    console.log(data);


    for (let item of data) {

        let overWrap = document.createElement('div');
        let addComment = document.createElement('div');

        async function showComment(id) {

            addComment.innerHTML = '';
            let comm = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(commentObj => commentObj.json());
            console.log(comm);

            for (let z of comm) {
                addComment.innerHTML += `<ul class="list-group list-gclassNameflush">
                <li class="list-group-item">NAME:  ${z.name}</li>
                <li class="list-group-item">Email: ${z.email}</li>
                <li class="list-group-item">COMMENT: ${z.body}</li>
            </ul>`;
            }

        }


        overWrap.innerHTML +=  `<div class="card" >
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">USER_ID ${item.userId}</li>
                            <li class="list-group-item">ID_ ${item.id}</li>
                            <li class="list-group-item">TITLE ${item.title}</li>
                              </ul>
                             <div class="card-footer">BODY :
                                    ${item.body}
                            </div>
                      </div>`;

        overWrap.append(addComment);

        wrapper.append(overWrap);
        let btn = document.createElement('button');
        btn.classList.add('btn-success');
        btn.classList.add('btn');
        btn.textContent = 'SHOW COMMENT';


        btn.addEventListener('click', () => {
            showComment(item.id);
        })

        wrapper.append(btn);
    }

    container.append(wrapper);
}

doFetch();