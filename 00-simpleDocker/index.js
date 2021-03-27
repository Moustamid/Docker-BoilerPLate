const express = require('express');
const chalk = require('chalk');

const app = express();

// routes hundler

app.get('/', (req, res) => {
  res.send('<h1>Hi there , this is a sinple Docker node app</h1>');
});

app.listen(8080, () => {
  console.log(
    chalk.hex('#26a65b').bold(`Express Server running on port 5000 ... 🐳 `)
  );
});

// docker build -t moustamid/simpledocker .
// docker run -p 5000:8080  moustamid/simpledocker
