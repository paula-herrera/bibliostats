import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf.jsx';
import AddABook from './AddABook.jsx';
import CurrentlyReading from './CurrentlyReading.jsx';
import Read from './TBR.jsx';
import TBR from './TBR.jsx';
import DNF from './TBR.jsx';
import BookPage from './BookPage.jsx';

const App = () => {
  const [activeView, setActiveView] = useState('bookshelf');
  const [allBooks, setAllBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({})

  useEffect(() => {getAllBooks()}, []);

  const changeView = (view) => {
    setActiveView(view)
  }

  const goToBookPage = (book) => {
    setSelectedBook(book);
    changeView('bookPage');
  }

  const getAllBooks = () => {
    axios.get('http://localhost:1313/api/getBooks')
      .then(results => {
        setAllBooks(results.data);
      })
  }

  const searchBooks = (query) => {
    axios.get(`http://localhost:1313/api/search/${query}`)
      .then(results => setSearchResults(results.data))
      .catch(() => console.log('couldn\'t search'))
  }

  const addBook = (e) => {
    let bookToAdd = {};
    for (let book of searchResults) {
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
      .then(() => getAllBooks())
  }

  const editBookDetails = (id, status, dateStarted, dateFinished, format, rating) => {
    const update = {
      status: status,
      dateStarted: dateStarted,
      dateFinished: dateFinished,
      format: format,
      rating: rating
    }
    axios.patch(`http://localhost:1313/api/editBookDetails/${id}`, update)
      .then((book) => setSelectedBook(book.data[0]))
  }

  const editBookReview = (id, review) => {
    const update = {
      review: review,
    }
    axios.patch(`http://localhost:1313/api/editBookReview/${id}`, update)
      .then((book) => setSelectedBook(book.data[0]))
  }

  const editBookNotes = (id, notes) => {
    const update = {
      notes: notes,
    }
    axios.patch(`http://localhost:1313/api/editBookNotes/${id}`, update)
      .then((book) => setSelectedBook(book.data[0]))
  }


    let view = <></>
    if (activeView === 'bookshelf') {
      view = <Bookshelf
              allBooks={allBooks}
              changeView={changeView}
              goToBookPage={goToBookPage}
            />
    }
    if (activeView === 'addABook') {
      view = <AddABook
              searchBooks={searchBooks}
              searchResults={searchResults}
              addBook={addBook}
            />
    }
    if (activeView === 'currentlyReading') {
      let books = allBooks.filter(book => book.status === 'Currently Reading');
      view = <CurrentlyReading
        books={books}
        goToBookPage={goToBookPage}
      />
    }
    if (activeView === 'read') {
      let books = allBooks.filter(book => book.status === 'Read');
      view = <Read
        books={books}
        goToBookPage={goToBookPage}
      />
    }
    if (activeView === 'tbr') {
      let books = allBooks.filter(book => book.status === 'To Be Read');
      view = <TBR
        books={books}
        goToBookPage={goToBookPage}
      />
    }
    if (activeView === 'dnf') {
      let books = allBooks.filter(book => book.status === 'Did Not Finish');
      view = <DNF
        books={books}
        goToBookPage={goToBookPage}
      />
    }
    if (activeView === 'bookPage') {
      view = <BookPage
        book={selectedBook}
        editBookDetails={editBookDetails}
        editBookReview={editBookReview}
        editBookNotes={editBookNotes}
      />
    }
    return (
      <div className="main">
        <div className="header">
          <div className="logo">BiblioStats</div>
          <div className="nav">
            <div className="bookshelf-nav" onClick={() => changeView('bookshelf')}>Bookshelf</div>
            <div className="stats-nav">Stats</div>
            <div className="add-book-nav" onClick={() => changeView('addABook')}>Add A Book</div>
          </div>
        </div>
        {view}
      </div>
    )
}

export default App;