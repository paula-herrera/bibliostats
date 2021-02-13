import React from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf.jsx';
import AddABook from './AddABook.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'addABook',
      searchResults: [],
    }

    this.searchBooks = this.searchBooks.bind(this);
    this.addBook = this.addBook.bind(this)
  }

  searchBooks(query) {
    axios.get(`http://localhost:1313/api/search/${query}`)
      .then(results => this.setState({searchResults: results.data}))
      .catch(() => console.log('couldn\'t search'))
  }

  addBook(e) {
    let bookToAdd = {};
    for (let book of this.state.searchResults) {
      if (book.id === e.target.id) {
        bookToAdd = {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          publishedDate: book.volumeInfo.publishedDate,
          pages: book.volumeInfo.pageCount,
          categories: book.volumeInfo.categories,
          description: book.volumeInfo.description,
          imageLinks: book.volumeInfo.imageLinks
        };
      }
    }
    axios.post('http://localhost:1313/api/addToShelf', bookToAdd)

  }

  render() {
    let view = <div>Test</div>
    if (this.state.view === 'bookshelf') {
      view = <Bookshelf />
    }
    if (this.state.view === 'addABook') {
      view = <AddABook
              searchBooks={this.searchBooks}
              searchResults={this.state.searchResults}
              addBook={this.addBook}
            />
    }
    return (
      <div className="main">
        <div className="header">
          <h1 className="logo">BiblioStats</h1>
          <div className="nav">
            <div className="bookshelf-nav" onClick={() => this.setState({view: 'bookshelf'})}>Bookshelf</div>
            <div className="stats-nav">Stats</div>
            <div className="add-book-nav" onClick={() => this.setState({view: 'addABook'})}>Add A Book</div>
          </div>
        </div>
        {view}
      </div>
    )
  }
}

export default App;