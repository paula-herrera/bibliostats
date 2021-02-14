import React from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf.jsx';
import AddABook from './AddABook.jsx';
import CurrentlyReading from './CurrentlyReading.jsx';
import Read from './TBR.jsx';
import TBR from './TBR.jsx';
import DNF from './TBR.jsx';
import BookPage from './BookPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'bookshelf',
      allBooks: [],
      searchResults: [],
      selectedBook: {}
    }

    this.getAllBooks = this.getAllBooks.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this.addBook = this.addBook.bind(this);
    this.changeView = this.changeView.bind(this);
    this.goToBookPage = this.goToBookPage.bind(this);
  }

  changeView(view) {
    this.setState({view: view})
  }

  goToBookPage(book) {
    this.setState({selectedBook: book});
    this.changeView('bookPage')
  }

  getAllBooks() {
    axios.get('http://localhost:1313/api/getBooks')
      .then(results => {
        this.setState({allBooks: results.data})
      })
  }

  componentDidMount() {
    this.getAllBooks();
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
          id: book.id,
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
      .then(() => this.getAllBooks())
  }

  render() {
    let view = <></>
    if (this.state.view === 'bookshelf') {
      view = <Bookshelf
              allBooks={this.state.allBooks}
              changeView={this.changeView}
              goToBookPage={this.goToBookPage}
            />
    }
    if (this.state.view === 'addABook') {
      view = <AddABook
              searchBooks={this.searchBooks}
              searchResults={this.state.searchResults}
              addBook={this.addBook}
            />
    }
    if (this.state.view === 'currentlyReading') {
      let books = this.state.allBooks.filter(book => book.status === 'Currently Reading');
      view = <CurrentlyReading
        books={books}
        goToBookPage={this.goToBookPage}
      />
    }
    if (this.state.view === 'read') {
      let books = this.state.allBooks.filter(book => book.status === 'Read');
      view = <Read
        books={books}
        goToBookPage={this.goToBookPage}
      />
    }
    if (this.state.view === 'tbr') {
      let books = this.state.allBooks.filter(book => book.status === 'To Be Read');
      view = <TBR
        books={books}
        goToBookPage={this.goToBookPage}
      />
    }
    if (this.state.view === 'dnf') {
      let books = this.state.allBooks.filter(book => book.status === 'Did Not Finish');
      view = <DNF
        books={books}
        goToBookPage={this.goToBookPage}
      />
    }


    if (this.state.view === 'bookPage') {
      view = <BookPage
        book={this.state.selectedBook}
      />
    }
    return (
      <div className="main">
        <div className="header">
          <div className="logo">BiblioStats</div>
          <div className="nav">
            <div className="bookshelf-nav" onClick={() => this.changeView('bookshelf')}>Bookshelf</div>
            <div className="stats-nav">Stats</div>
            <div className="add-book-nav" onClick={() => this.changeView('addABook')}>Add A Book</div>
          </div>
        </div>
        {view}
      </div>
    )
  }
}

export default App;