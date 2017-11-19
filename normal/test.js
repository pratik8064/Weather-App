const express = require('express')
const app = express()

app.get('/', function (req, res) {
  //req.session.destroy();
    var obj = {};
    obj.time = Math.random(0,100);
    obj.wind = Math.random(0, 50);
    obj.name = "London";
    obj.temperature = Math.random(0,50);
    obj.humidity = Math.random(0,50);
    obj.cloud = Math.random(0,250);
    res.send(obj);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))