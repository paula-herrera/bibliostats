const Book = require('../models/book.js');

let queries = {
  getAllBooks: (cb) => {
    Book.find({})
      .then((books)=> {
        cb(null, books);
      })
      .catch(err => {
        cb(err, null);
      });
  },

  addBook: (book, cb) => {
    Book.create(book)
      .then((book)=> {
        cb(null, book);
      })
      .catch(err => {
        cb(err, null);
      });
  }
}

module.exports = queries;