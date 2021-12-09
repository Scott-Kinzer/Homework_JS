window.onload = () => {
    console.log(localStorage.getItem('card_1'));
    let wrapper = document.createElement('div');
    wrapper.style.margin = '0 auto';
    wrapper.style.width = '1140px';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.flexWrap = 'wrap';
    document.body.append(wrapper);

    for (let [, item] of Object.entries(localStorage)) {

        let {name, age, status} = JSON.parse(item);

        let card = document.createElement('div');
        card.style.width = '300px';
        card.style.background = 'blue';
        card.style.minHeight = '100px';
        let button = document.createElement('button');
        button.style.margin = '0 auto';
        button.style.display = 'block';
        card.style.color = 'white';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'center';
        card.style.alignItems = 'center';
        button.style.minWidth = '50px';
        // button.style.height = '20px';
        button.textContent = 'ADD TO FAVORITE';
        card.innerHTML = `
            <div>
            <div>${name}</div>
            <div>${age}</div>
            <div>${status}</div>
            </div>
        `

        card.append(button);
        card.style.margin = '10px';
        wrapper.append(card);

    }
}