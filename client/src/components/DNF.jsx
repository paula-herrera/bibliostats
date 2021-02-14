import React from 'react';
import BookCard from './BookCard.jsx';

const DNF = ({books, goToBookPage}) => {
  return (
    <>
      <h1>Read</h1>
      <div className="tbr">
        <div className="tbr-books">
          {books.map((book, i) =>
            <BookCard
              book={book}
              key={i}
              goToBookPage={goToBookPage}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default DNF;