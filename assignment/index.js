const fs = require("fs");
    let users = [
  { id: 1,
     name: "Sumiti", 
     age: "19", 
     purchases: [] 
    },
  { 
    id: 2,
    name: "Pranav", 
    age: "21", 
    purchases: [] 
}];
// fs.writeFile("../users.txt",JSON.stringify(users),function(err){
//     if(err) return console.log(err);
//     console.log("users written");

//});
let products = [
  { id: 1,
     name: "Car",
     Model: "2019", 
     purchases: []
    },
  { 
    id: 2,
    name: "Bike", 
    age: "2101", 
    purchases: [] 
}];
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written");

});
fs.writeFile("../products.txt",JSON.stringify(products),function(err){
    if(err) return console.log(err);
    console.log("products written");
    });