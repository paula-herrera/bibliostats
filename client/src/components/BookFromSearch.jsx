import React from 'react';

const BookFromSearch = ({book, addBook}) => {
  return (
    <div className="bookToAdd">
      <div className="col-1">
        <img src={book.volumeInfo.imageLinks.thumbnail}></img>
        <button
          id={book.id}
          onClick={addBook}
        >Add To Shelf</button>
      </div>
      <div className="col-2">
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.publishedDate.substr(0, 4)}</p>
        <p>{book.volumeInfo.categories}</p>
        <p>{book.volumeInfo.pageCount} pages</p>
      </div>
      <div className="col-3">
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  )
}

export default BookFromSearch;