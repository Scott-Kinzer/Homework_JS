// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let loginForm = document.forms['adding']


let {name, quantity, price, image, buttonAdd} = loginForm.elements;
console.log()

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();

    let arrayOfProducts = JSON.parse(localStorage.getItem('arrayOfProducts')) || [];

    if (!arrayOfProducts.filter(item => item.url === image.value).length > 0) {
        arrayOfProducts.push({
            name: name.value,
            quantity: quantity.value,
            price: price.value,
            url: image.value
        });
    }

    name.value = ''; quantity.value = ''; price.value = ''; image.value = '';

    localStorage.setItem('arrayOfProducts', JSON.stringify(arrayOfProducts));

})


