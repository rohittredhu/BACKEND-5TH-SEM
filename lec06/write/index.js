const fs = require("fs");

    fs.readFile("../demo.txt","Hello G27",function(err,data){
        if(err) return console.log(err);
        
        console.log(data)
    })
