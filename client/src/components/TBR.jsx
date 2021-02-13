import React from 'react';

const TBR = ({books}) => {
  console.log(books)
  return (
    <>
      <h2>To Be Read</h2>
      <div className="tbr">
        <div className="tbr-books">
          {books.map((book, i) =>
            <div className="book-card" key={i}><img src={book.cover}></img></div>
          )}
        </div>
      </div>
    </>
  )
}

export default TBR;