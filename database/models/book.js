const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  bookId: String,
  title: String,
  authors: Array,
  publishedDate: String,
  pages: Number,
  genres: Array,
  description: String,
  status: String,
  dateStarted: String,
  dateFinished: String,
  format: String,
  rating: Number,
  review: String,
  notes: String,
  cover: String,
  dateAdded: Date,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;