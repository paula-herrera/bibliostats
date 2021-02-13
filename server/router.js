const express = require('express');
let router = express.Router();
const controllers = require('./controller');

router
  .route('/search/:query')
  .get((req, res) => {
    controllers.searchBooksToAdd(req, res);
  });

router
  .route('/addToShelf')
  .post((req, res) => {
    controllers.addBookToShelf(req, res);
  })

module.exports = router;