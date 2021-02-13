const Book = require('../models/book.js');

const addBook = (book, cb) => {
  Book.create(book)
    .then(()=> {
      cb();
    })
    .catch(err => {
      cb(err);
    });
}

module.exports = addBook