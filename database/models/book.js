const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  author: Array[String],
  publishedDate: String,
  pages: Number,
  genres: Array[String],
  description: String,
  status: String,
  dateStarted: String,
  dateFinished: String,
  format: String,
  rating: Number,
  review: String,
  notes: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;