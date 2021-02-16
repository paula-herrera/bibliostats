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
      .then(() => Book.find({bookId: id}))
      .then((book) => {
        cb(null, book);
      })
      .catch(err => {
        cb(err, null);
      })
  },

  editBookReview: (id, update, cb) => {
    Book.findOneAndUpdate({bookId: id}, update)
      .then(() => Book.find({bookId: id}))
      .then((book) => {
        cb(null, book);
      })
      .catch(err => {
        cb(err, null);
      })
  },

  editBookNotes: (id, update, cb) => {
    Book.findOneAndUpdate({bookId: id}, update)
      .then(() => Book.find({bookId: id}))
      .then((book) => {
        cb(null, book);
      })
      .catch(err => {
        cb(err, null);
      })
  },

  deleteBook: (id, cb) => {
    Book.findOneAndRemove({bookId: id})
      .then(() => {
        cb();
      })
      .catch(err => {
        cb(err);
      })
  }
}

module.exports = queries;