'use strict';

const express = require('express');

// Constants
const PORT = 9001;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  var response = {
    "id": "0001",
    "hostname": process.env.HOSTNAME,
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
      {
        "batter":
          [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
          ]
      },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
});

app.post('/', function(request, response){
  request.body.hostname = process.env.HOSTNAME;
  response.send(request.body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);