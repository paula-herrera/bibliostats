import React, { useState } from 'react';
import EditBook from './EditBook.jsx';

const BookPage = ({book}) => {
  const [show, setShow] = useState(false);

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
    {dateStarted}
    {dateFinished}
    {format}
    {rating}
  </div>

  let review = <></>
  if (book.review === '') {
    review = <p>Add a review</p>
  } else {
    <p>{book.review}</p>
  }
  let notes = <></>
  if (book.notes === '') {
    notes = <p>Add a note</p>
  } else {
    <p>{book.notes}</p>
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
            <p>Status</p>
            {status}
            <button
              onClick={() => setShow(true)}
            >Edit Status</button>
            <EditBook
              show={show}
              onClose={() => setShow(false)}
              book={book}
            />
          </div>
        </div>
        <div>
          <p>Review</p>
          {review}
          <button>Edit Review</button>
        </div>
        <div>
          <p>Notes</p>
          {notes}
          <button>Edit Notes</button>
        </div>
      </div>
    </>
  )
}

export default BookPage;