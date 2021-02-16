import React, { useState } from 'react';
import EditBook from './EditBook.jsx';
import EditReview from './EditReview.jsx';
import EditNotes from './EditNotes.jsx';

const BookPage = ({book, editBookDetails, editBookReview, editBookNotes}) => {
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
    dateStarted = <p>Started reading on {book.dateStarted}</p>
  }
  let dateFinished = <></>
  if (book.dateStarted === '') {
    dateFinished = <p>No Finish Date</p>
  } else {
    dateFinished = <p>Finished reading on {book.dateFinished}</p>
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
  } else {
    rating = <p>{book.rating}/5</p>
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
    review = <p>Add a review</p>
  } else {
    review = <p>{book.review}</p>
  }
  let notes = <></>
  if (book.notes === '') {
    notes = <p>Add a note</p>
  } else {
    notes = <p>{book.notes}</p>
  }

  return (
    <>
      <h1>{book.title}</h1>
      <div className="book-page">
        <div className="book-page-body">
          <div className="book-page-cover">
            <img src={book.cover}></img>
          </div>
          <div className="book-page-info">
            <p>{book.authors}</p>
            <p>{book.publishedDate.substr(0,4)}</p>
            <p>{book.pages} pages</p>
            <p>{book.genres}</p>
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
        <div>
          <p>Review</p>
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
          <p>Notes</p>
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
    </>
  )
}

export default BookPage;