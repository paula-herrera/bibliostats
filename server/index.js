const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const PORT = 1313;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + './../client/dist'));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});