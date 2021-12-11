async function doFetch() {
    let wrapper = document.querySelector('.wrapper');
    let container = document.querySelector('.container');
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json());

    console.log(data);
    for (let item of data) {

        wrapper.innerHTML +=  `<div class="card" style="width: 18rem;">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">USER_ID ${item.userId}</li>
                            <li class="list-group-item">ID_ ${item.id}</li>
                            <li class="list-group-item">TITLE ${item.title}</li>
                          </ul>
                             <div class="card-footer">BODY :
                        ${item.body}
                            </div>
                      </div>`;
    }

    container.append(wrapper);
}

// doFetch();

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


async function doFetchComments() {
    let wrapper = document.querySelector('.wrapper');
    let container = document.querySelector('.container');
    let data = await fetch("https://jsonplaceholder.typicode.com/comments")
        .then(data => data.json());

    console.log(data);
    for (let item of data) {

        wrapper.innerHTML +=  `<div class="card" style="width: 18rem;">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">USER_ID ${item.postId}</li>
                            <li class="list-group-item">ID_ ${item.id}</li>
                            <li class="list-group-item">EMAIL ${item.email}</li>
                            <li class="list-group-item">TITLE ${item.name}</li>
                          </ul>
                             <div class="card-footer">BODY :
                        ${item.body}
                            </div>
                      </div>`;
    }

    container.append(wrapper);
}


doFetchComments();
