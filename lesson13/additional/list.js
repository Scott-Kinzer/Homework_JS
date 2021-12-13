window.onload = () => {

    console.log("hello");
    let products = JSON.parse(localStorage.getItem('arrayOfProducts'));
    console.log(products);
    let wrapper = document.querySelector('.wrapper');

    for (let product of products) {
        let card = document.createElement('div');
        card.classList.add('card');
        let namePrd = document.createElement('div');
        namePrd.textContent = product.name;

        let qtPrd = document.createElement('div');
        qtPrd.textContent = product.quantity;

        let pricePrd = document.createElement('div');
        pricePrd.textContent = product.price;

        let urlPrd = document.createElement('img');
        urlPrd.src = product.url;



        let btnPrd = document.createElement('button');
        btnPrd.textContent = "DELETE"

        btnPrd.classList.add('btn-primary');
        card.append(namePrd, qtPrd, pricePrd, urlPrd, btnPrd);

        wrapper.append(card);
        btnPrd.addEventListener('click', (e) => {
            e.preventDefault();

            let productsArr = JSON.parse(localStorage.getItem('arrayOfProducts'));

            let newArr = productsArr.filter(item => item.url !== product.url);
            localStorage.setItem('arrayOfProducts', JSON.stringify(newArr));

            location.reload();
        })


    }
}