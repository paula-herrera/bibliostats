// link to database here
const API_KEY = require('../config/googleBooks');
const axios = require('axios');
//connsect to database controllers here
const queries = require('../database/controllers/index.js');

require('../database/index.js');

let controllers = {
  getBooks: (req, res) => {
    queries.getAllBooks((err, books) => {
      if (err) {
        res.send(err);
      } else {
        res.send(books);
      }
    })
  },

  searchBooksToAdd: (req, res) => {
    const query = req.params.query.split(' ').join('-');
    axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY.API_KEY}`)
      .then(response => res.send(response.data.items))
      .catch(err => res.status(200).send(err));
  },

  addBookToShelf: (req, res) => {
    const book = {
      bookId: req.body.id,
      title: req.body.title,
      authors: req.body.authors,
      publishedDate: req.body.publishedDate,
      pages: req.body.pages,
      genres: req.body.categories,
      description: req.body.description,
      status: 'To Be Read',
      dateStarted: '',
      dateFinished: '',
      format: '',
      rating: 0,
      review: '',
      notes: '',
      cover: req.body.imageLinks.thumbnail,
      dateAdded: new Date()
    };
    queries.addBook(book, (err, book) => {
      if (err) {
        res.send(err);
      } else {
        res.send(book);
      }
    })
  }
}

module.exports = controllers;