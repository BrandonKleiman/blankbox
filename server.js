const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('./public'));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
const server = app.listen(port, () => {
  console.log(`connected to ${port}`);
});

module.exports = app;
