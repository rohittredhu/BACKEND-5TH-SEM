const fs = require('fs');
const { read, write } = require('./IO/io.js'); 

const user = process.argv[2];
const product = process.argv[3];

if (!user || !product) {
    console.log("Please provide both user and product.");
    process.exit(1);
}

async function order(user, product) {
    let users = await read("users.txt");
    let products = await read("products.txt");

    let userFound = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === user) {
            userFound = users[i];
            break; 
        }
    }

    let productFound = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === product) {
            productFound = products[i]; // ✅ fixed variable name
            break;
        }
    }

    if (!userFound) {
        console.log("User does not exist.");
        return;
    }

    if (!productFound) {
        console.log("Product does not exist.");
        return;
    }

    let message = await write("orders.txt", [
        JSON.stringify(userFound),
        JSON.stringify(productFound)
    ]);
    console.log(message);
}

order(user, product);