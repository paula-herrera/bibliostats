import React from 'react';
import BookCard from './BookCard.jsx';

const DNF = ({books, goToBookPage}) => {
  books.sort(function(a,b) {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  })

  return (
    <>
      <h1>Did Not Finish</h1>
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