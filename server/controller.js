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
        res.status(500).send(err);
      } else {
        res.status(200).send(books);
      }
    })
  },

  searchBooksToAdd: (req, res) => {
    const query = req.params.query.split(' ').join('-');
    axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY.API_KEY}`)
      .then(response => res.status(200).send(response.data.items))
      .catch(err => res.status(500).send(err));
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
        res.status(500).send(err);
      } else {
        res.status(201).send(book);
      }
    })
  },

  editBookDetails: (req, res) => {
    const update = {
      status: req.body.status,
      dateStarted: req.body.dateStarted,
      dateFinished: req.body.dateFinished,
      format: req.body.format,
      rating: req.body.rating
    }
    queries.editBookDetails(req.params.id, update, (err, book) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send('successfully updated');
      }
    })
  }
}

module.exports = controllers;