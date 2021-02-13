const Book = require('../models/book.js');

const addBook = (book, cb) => {
  Book.create(book)
    .then((book)=> {
      cb(null, book);
    })
    .catch(err => {
      cb(err, null);
    });
}

module.exports = addBook