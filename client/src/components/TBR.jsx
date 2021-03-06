import React, { useState } from 'react';
import BookCard from './BookCard.jsx';

const TBR = ({books, goToBookPage}) => {
  const [filter, setFilter] = useState('dateAdded');
  if (filter === 'dateAdded') {
    books.sort(function(a,b) {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    })
  } else if (filter === 'title') {
    books.sort(function(a,b) {
      if(a.title < b.title) {return -1;}
      if(a.title > b.title) {return 1;}
      return 0;
    })
  }

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
      <div className="sort-by">
        <label htmlFor="sort-by-select"><p>Sort By</p></label>
        <select
          name="sort-by"
          id="sort-by-select"
          onChange={() => setFilter(event.target.value)}
        >
          <option value="dateAdded">Date Added</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div className="tbr">
        {body}
      </div>
    </>
  )
}

export default TBR;