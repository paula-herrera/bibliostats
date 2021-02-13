// link to database here
const API_KEY = require('../config/googleBooks');
const axios = require('axios');
//connsect to database controllers here
const addBook = require('../database/controllers/index.js')

require('../database/index.js');

let controllers = {
  searchBooksToAdd: (req, res) => {
    const query = req.params.query.split(' ').join('-');
    axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY.API_KEY}`)
      .then(response => res.send(response.data.items))
      .catch(err => res.status(200).send(err));
  },

  addBookToShelf: (req, res) => {
    const book = {
      title: req.body.title,
      authors: req.body.authors,
      publishedDate: req.body.publishedDate,
      pages: req.body.pageCount,
      genres: req.body.categtores,
      description: req.body.description,
      status: 'To Be Read',
      dateStarted: '',
      dateFinished: '',
      format: '',
      rating: 0,
      review: '',
      notes: '',
      cover: req.body.imageLinks.thumbnail
    };
    console.log('controller:', book);
    addBook(book, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.send('added book')
      }
    })
  }
}

module.exports = controllers;