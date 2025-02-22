import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

// Context/Situation #1
// We are running file in development in isolation
// We are using local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
//immediately render app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    if (el) {
        mount(el);
    }
}

// Context/Situation #2
// Running file in dev or prod through container app
// no guarentee that element with id 'dev-products' exists
// DON'T TRY TO IMMEDIATELY RENDER THE APP
export { mount };