const express = require('express');
let router = express.Router();
const controllers = require('./controller');

router
  .route('/getBooks')
  .get((req, res) => {
    controllers.getBooks(req, res);
  })

router
  .route('/search/:query')
  .get((req, res) => {
    controllers.searchBooksToAdd(req, res);
  });

router
  .route('/addToShelf')
  .post((req, res) => {
    controllers.addBookToShelf(req, res);
  });

router
  .route('/editBookDetails/:id')
  .patch((req, res) => {
    controllers.editBookDetails(req, res);
  });

router
  .route('/editBookReview/:id')
  .patch((req, res) => {
    controllers.editBookReview(req, res);
  });

router
  .route('/editBookNotes/:id')
  .patch((req, res) => {
    controllers.editBookNotes(req, res);
  });

module.exports = router;