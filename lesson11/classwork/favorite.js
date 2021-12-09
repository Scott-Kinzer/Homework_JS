window.onload = () => {

    let wrapper = document.createElement('div');
    wrapper.style.margin = '0 auto';
    wrapper.style.width = '1140px';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.flexWrap = 'wrap';
    document.body.append(wrapper);
    let array = JSON.parse(localStorage.getItem('allEntries'));
    for (let item of array) {

        let {name, age, status} = item;

        let card = document.createElement('div');
        card.style.width = '300px';
        card.style.background = 'blue';
        card.style.minHeight = '100px';
        card.style.color = 'white';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'center';
        card.style.alignItems = 'center';

        card.innerHTML = `
            <div>
            <div>${name}</div>
            <div>${age}</div>
            <div>${status}</div>
            </div>
        `


        card.style.margin = '10px';
        wrapper.append(card);

    }
}