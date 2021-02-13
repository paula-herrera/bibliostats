const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
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
  cover: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;