import React from 'react';
import BookCard from './BookCard.jsx';

const TBR = ({books}) => {
  console.log(books)
  return (
    <>
      <h1>To Be Read</h1>
      <div className="tbr">
        <div className="tbr-books">
          {books.map((book, i) =>
            <BookCard
              book={book}
              key={i}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default TBR;