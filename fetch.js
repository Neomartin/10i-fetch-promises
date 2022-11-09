const users = [];
console.time(`start`)

fetch(`https://dummyjson.com/products`)
        .then((resp) => resp.json())
        .then(response => {
            const usersFromDummyJson = response.products;
            console.log(usersFromDummyJson);
            renderProducts(usersFromDummyJson)
        })
        .catch(() => console.error(`Error en petición`))


const renderUser = (users) => {
    // users.forEach(user => {
    //     const div = document.createElement(`div`);
    //     div.innerHTML = `
    //         <img src='${user.image}' style='width: 100px; height: 100px; border-radius: 50%;' />
    //         <h3>${user.firstName} ${user.lastName}</h3>`;

    //     document.body.appendChild(div);
    // })
}

const renderProducts = (products) => {
    products.forEach(prod => {
        const div = document.createElement(`div`);
        div.innerHTML = `
            <img src='${prod.images[0]}' style='width: 100px; height: 100px; border-radius: 50%;' />
            <h3>${prod.title}</h3>`;

        document.body.appendChild(div);
    })
}

console.log(`se ejecuto`)

console.timeEnd(`start`)