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
  },

  editBookDetails: (id, update, cb) => {
    Book.findOneAndUpdate({bookId: id}, update)
      .then(() => {
        cb(null);
      })
      .catch(err => {
        cb(err);
      })
  }
}

module.exports = queries;