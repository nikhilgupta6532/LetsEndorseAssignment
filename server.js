const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/authroutes')(app);

app.listen(PORT, () => {
  console.log(`Magic is happening on port ${PORT}`);
});
