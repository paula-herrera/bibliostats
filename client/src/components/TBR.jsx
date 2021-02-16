import React from 'react';
import BookCard from './BookCard.jsx';

const TBR = ({books, goToBookPage}) => {
  books.sort(function(a,b) {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  })

  let body = <></>
  if (books.length === 0) {
    body = <div>
      <p>
        No Books Added to This Shelf
      </p>
    </div>
  } else {
    body = <div className="tbr-books">
      {books.map((book, i) =>
        <BookCard
          book={book}
          key={i}
          goToBookPage={goToBookPage}
        />
      )}
    </div>
  }

  return (
    <>
      <h1>To Be Read</h1>
      <div className="tbr">
        {body}
      </div>
    </>
  )
}

export default TBR;