import React from 'react';

const BookCard = ({book, goToBookPage}) => {
  return (
    <div className="book-card">
      <div
        className="book-card-inner"
        onClick={() => goToBookPage(book)}
      >
        <div className="book-card-cover">
          <img src={book.cover}></img>
        </div>
        <div className="book-card-body">
          <div className="book-card-info">
          <h3>{book.title}</h3>
            <p>{book.authors}</p>
            <p>{book.publishedDate.substr(0,4)}</p>
            <p>{book.genres}</p>
            <div className="book-card-status">
              <p>{book.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard;