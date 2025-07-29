const express = require('express');
const app = express();
const PORT = 5555;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req,res)=>{
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;

  res.json({
    username,
    password
  })
})

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});