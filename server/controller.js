// link to database here
const API_KEY = require('../config/googleBooks');
const axios = require('axios');

let controllers = {
  searchBooksToAdd: (req, res) => {
    const query = req.params.query.split(' ').join('-');
    axios(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY.API_KEY}`)
      .then(response => res.send(response.data.items))
      .catch(err => res.status(200).send(err));
  }

}

module.exports = controllers;