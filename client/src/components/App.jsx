import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf.jsx';
import AddABook from './AddABook.jsx';
import CurrentlyReading from './CurrentlyReading.jsx';
import Read from './Read.jsx';
import TBR from './TBR.jsx';
import DNF from './DNF.jsx';
import BookPage from './BookPage.jsx';
import Stats from './Stats.jsx'

const App = () => {
  const [activeView, setActiveView] = useState('bookshelf');
  const [prevView, setPrevView] = useState('')
  const [allBooks, setAllBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {getAllBooks()}, []);

  const changeView = (view) => {
    setPrevView(activeView);
    setActiveView(view);
  }

  const goToBookPage = (book) => {
    setSelectedBook(book);
    changeView('bookPage');
  }

  const getAllBooks = () => {
    axios.get('/api/getBooks')
      .then(results => {
        setAllBooks(results.data);
      })
  }

  const searchBooks = (query) => {
    axios.get(`/api/search/${query}`)
      .then(results => setSearchResults(results.data))
      .catch(() => console.log('Coult not perform search'))
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
    axios.post('/api/addToShelf', bookToAdd)
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
    axios.patch(`bibliostats.herokuapp.com/api/editBookDetails/${id}`, update)
      .then((book) => setSelectedBook(book.data[0]))
      .then(() => getAllBooks())
  }

  const editBookReview = (id, review) => {
    const update = {
      review: review,
    }
    axios.patch(`/api/editBookReview/${id}`, update)
      .then((book) => setSelectedBook(book.data[0]))
      .then(() => getAllBooks())
  }

  const editBookNotes = (id, notes) => {
    const update = {
      notes: notes,
    }
    axios.patch(`/api/editBookNotes/${id}`, update)
      .then((book) => setSelectedBook(book.data[0]))
      .then(() => getAllBooks())
  }

  const deleteBook = (id) => {
    axios.delete(`/api/deleteBook/${id}`)
      .then(() => setActiveView(prevView))
      .then(() => getAllBooks())
  }

  let bookshelfNav = {borderBottom: "none"};
  let addBookNav = {borderBottom: "none"};
  let statsNav = {borderBottom: "none"};
  let style = {borderBottom: "2px solid #00adb5"}

  let view = <></>
  if (activeView === 'bookshelf') {
    bookshelfNav = style;
    addBookNav = {borderBottom: "none"}
    addBookNav = {borderBottom: "none"};
    view = <Bookshelf
            allBooks={allBooks}
            changeView={changeView}
            goToBookPage={goToBookPage}
          />
  }
  if (activeView === 'addABook') {
    addBookNav = style;
    bookshelfNav = {borderBottom: "none"}
    addBookNav = {borderBottom: "none"};
    view = <AddABook
            searchBooks={searchBooks}
            searchResults={searchResults}
            addBook={addBook}
            allBooks={allBooks}
          />
  }
  if (activeView === 'currentlyReading') {
    let books = allBooks.filter(book => book.status === 'Currently Reading');
    bookshelfNav = style;
    addBookNav = {borderBottom: "none"}
    addBookNav = {borderBottom: "none"};
    view = <CurrentlyReading
      books={books}
      goToBookPage={goToBookPage}
    />
  }
  if (activeView === 'read') {
    let books = allBooks.filter(book => book.status === 'Read');
    bookshelfNav = style;
    addBookNav = {borderBottom: "none"}
    addBookNav = {borderBottom: "none"};
    view = <Read
      books={books}
      goToBookPage={goToBookPage}
    />
  }
  if (activeView === 'tbr') {
    let books = allBooks.filter(book => book.status === 'To Be Read');
    bookshelfNav = style;
    addBookNav = {borderBottom: "none"}
    addBookNav = {borderBottom: "none"};
    view = <TBR
      books={books}
      goToBookPage={goToBookPage}
    />
  }
  if (activeView === 'dnf') {
    let books = allBooks.filter(book => book.status === 'Did Not Finish');
    bookshelfNav = style;
    addBookNav = {borderBottom: "none"}
    addBookNav = {borderBottom: "none"};
    view = <DNF
      books={books}
      goToBookPage={goToBookPage}
    />
  }
  if (activeView === 'bookPage') {
    bookshelfNav = style;
    addBookNav = {borderBottom: "none"};
    addBookNav = {borderBottom: "none"};
    view = <BookPage
      book={selectedBook}
      editBookDetails={editBookDetails}
      editBookReview={editBookReview}
      editBookNotes={editBookNotes}
      deleteBook={deleteBook}
    />
  }
  if (activeView === 'stats') {
    bookshelfNav = {borderBottom: "none"};
    addBookNav = {borderBottom: "none"};
    statsNav = style;
    view = <Stats
      allBooks={allBooks}
    />
  }

  return (
    <div className="main">
      <div className="header">
        <div className="logo" onClick={() => changeView('bookshelf')}>BiblioStats</div>
        <div className="nav">
          <div className="bookshelf-nav dropdown">
            <div className="bookshelf-nav dropbtn" style={bookshelfNav} onClick={() => changeView('bookshelf')}>Bookshelf</div>
            <div className="dropdown-content">
              <div onClick={() => changeView('currentlyReading')}>Currently Reading</div>
              <div onClick={() => changeView('read')}>Read</div>
              <div onClick={() => changeView('tbr')}>To Be Read</div>
              <div onClick={() => changeView('dnf')}>Did Not Finish</div>
            </div>
          </div>
          <div className="stats-nav" style={statsNav} onClick={() => changeView('stats')}>Stats</div>
          <div className="add-book-nav" style={addBookNav} onClick={() => changeView('addABook')}>Add A Book</div>
        </div>
      </div>
      {view}
    </div>
  )
}

export default App;
