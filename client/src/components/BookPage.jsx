import React, { useState } from 'react';
import moment from 'moment';
import EditBook from './EditBook.jsx';
import EditReview from './EditReview.jsx';
import EditNotes from './EditNotes.jsx';

const BookPage = ({book, editBookDetails, editBookReview, editBookNotes, deleteBook}) => {
  const [showEditDetails, setShowEditDetails] = useState(false);
  const [showEditReview, setShowEditReview] = useState(false);
  const [showEditNotes, setShowEditNotes] = useState(false);

  let bookStatus = <></>
  if (book.status === '') {
    bookStatus = <p>No Status</p>
  } else {
    bookStatus = <p>{book.status}</p>
  }
  let dateStarted = <></>
  if (book.dateStarted === '') {
    dateStarted = <p>No Start Date</p>
  } else {
    dateStarted = <p>Started on: {moment(book.dateStarted).format('MMMM Do YYYY')}</p>
  }
  let dateFinished = <></>
  if (book.dateStarted === '') {
    dateFinished = <p>No Finish Date</p>
  } else {
    dateFinished = <p>Finished on: {moment(book.dateFinished).format('MMMM Do YYYY')}</p>
  }
  let format = <></>
  if (book.format === '') {
    format = <p>No Format Selected</p>
  } else {
    format = <p>{book.format}</p>
  }
  let rating = <></>
  if (book.rating === 0) {
    rating = <p>Not Rated</p>
  } else if (book.rating === 1) {
    rating = <p className="stars">★☆☆☆☆</p>
  } else if (book.rating === 2) {
    rating = <p className="stars">★★☆☆☆</p>
  } else if (book.rating === 3) {
    rating = <p className="stars">★★★☆☆</p>
  } else if (book.rating === 4) {
    rating = <p className="stars">★★★★☆</p>
  } else if (book.rating === 5) {
    rating = <p className="stars">★★★★★</p>
  }

  let status = <div>
    {bookStatus}
    {dateStarted}
    {dateFinished}
    {format}
    {rating}
  </div>

  let review = <></>
  if (book.review === '') {
    review = <div><p>Add a review</p></div>
  } else {
    review = <div className="review-notes"><p>{book.review}</p></div>
  }
  let notes = <></>
  if (book.notes === '') {
    notes = <div><p>Add a note</p></div>
  } else {
    notes = <div className="review-notes"><p>{book.notes}</p></div>
  }

  return (
    <>
      <h1>{book.title}</h1>
      <div className="book-page">
        <div className="book-page-body">
            <div className="cover-info">
              <div className="book-page-cover">
                <img src={book.cover}></img>
              </div>
              <div className="book-page-info">
                <p className="book-page-author">{book.authors}</p>
                <p>{book.publishedDate.substr(0,4)}</p>
                <p>{book.pages} pages</p>
                <p>{book.genres}</p>
              </div>
            </div>
            <div className="book-page-status">
              {status}
              <button
                onClick={() => setShowEditDetails(true)}
              >Edit Status</button>
              <EditBook
                show={showEditDetails}
                onClose={() => setShowEditDetails(false)}
                book={book}
                editBookDetails={editBookDetails}
              />
            </div>
        </div>
        <div className="row">
          <div className="review">
            <h2>Review</h2>
            {review}
            <button
              onClick={() => setShowEditReview(true)}
            >Edit Review</button>
            <EditReview
                show={showEditReview}
                onClose={() => setShowEditReview(false)}
                book={book}
                editBookReview={editBookReview}
              />
          </div>
          <div>
            <h2 className="notes">Notes</h2>
            {notes}
            <button onClick={() => setShowEditNotes(true)}
            >Edit Notes</button>
            <EditNotes
                show={showEditNotes}
                onClose={() => setShowEditNotes(false)}
                book={book}
                editBookNotes={editBookNotes}
              />
          </div>
        </div>
        <button
          className="remove-btn"
          onClick={() => deleteBook(book.bookId)}
        >
          Remove From Shelf
        </button>
      </div>
    </>
  )
}

export default BookPage;