import React from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf.jsx';
import AddABook from './AddABook.jsx';
import TBR from './TBR.jsx';
import BookPage from './BookPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'bookPage',
      allBooks: [],
      searchResults: [],
      selectedBook: {
        "authors": [
            "Elizabeth Acevedo"
        ],
        "genres": [
            "Young Adult Fiction"
        ],
        "_id": "602899be7f9e741934ac8688",
        "bookId": "42enDwAAQBAJ",
        "title": "Clap When You Land",
        "publishedDate": "2020-05-05",
        "pages": 432,
        "description": "In a novel-in-verse that brims with grief and love, National Book Award-winning and New York Times bestselling author Elizabeth Acevedo writes about the devastation of loss, the difficulty of forgiveness, and the bittersweet bonds that shape our lives. Camino Rios lives for the summers when her father visits her in the Dominican Republic. But this time, on the day when his plane is supposed to land, Camino arrives at the airport to see crowds of crying people… In New York City, Yahaira Rios is called to the principal’s office, where her mother is waiting to tell her that her father, her hero, has died in a plane crash. Separated by distance—and Papi’s secrets—the two girls are forced to face a new reality in which their father is dead and their lives are forever altered. And then, when it seems like they’ve lost everything of their father, they learn of each other. Great for summer reading or anytime! Clap When You Land is a Today show pick for “25 children’s books your kids and teens won’t be able to put down this summer!\" Plus don't miss Elizabeth Acevedo's The Poet X and With the Fire on High!",
        "status": "To Be Read",
        "dateStarted": "",
        "dateFinished": "",
        "format": "",
        "rating": 5,
        "review": "",
        "notes": "",
        "cover": "http://books.google.com/books/content?id=42enDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "dateAdded": "2021-02-14T03:32:14.658Z",
        "__v": 0
    }
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
    let view = <div>Test</div>
    if (this.state.view === 'bookshelf') {
      view = <Bookshelf
              allBooks={this.state.allBooks}
              changeView={this.changeView}
            />
    }
    if (this.state.view === 'addABook') {
      view = <AddABook
              searchBooks={this.searchBooks}
              searchResults={this.state.searchResults}
              addBook={this.addBook}
            />
    }
    if (this.state.view === 'tbr') {
      let books = this.state.allBooks.filter(book => book.status === 'To Be Read');
      view = <TBR
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