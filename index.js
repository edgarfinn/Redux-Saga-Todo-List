const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/'));
});

const port = process.env.PORT || 5000;

app.listen(port);
