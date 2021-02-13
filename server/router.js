const express = require('express');
let router = express.Router();
const controllers = require('./controller');

router
  .route('/search/:query')
  .get((req, res) => {
    controllers.searchBooksToAdd(req, res);
  });

module.exports = router;