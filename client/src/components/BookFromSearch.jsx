import React from 'react';

const BookFromSearch = ({book, addBook, onShelf}) => {
  if (book.volumeInfo.imageLinks === undefined) {
    var coverImage = <div className="no-cover">
       <p>No</p>
       <p>Cover</p>
       <p>Available</p>
    </div>
  } else {
    var cover = book.volumeInfo.imageLinks.thumbnail;
    var coverImage = <img src={cover}></img>
  }
  let title = book.volumeInfo.title;
  if (!title) {
    title = 'No Title Available';
  }
  let authors = book.volumeInfo.authors;
  if (!authors) {
    authors = 'Authors Not Available';
  }
  let publishedDate = undefined;
  if (book.volumeInfo.publishedDate === undefined) {
    publishedDate = 'No Publish Date Available';
  } else {
    publishedDate = book.volumeInfo.publishedDate.substr(0, 4);
  }
  let categories = book.volumeInfo.categories;
  if (!categories) {
    categories = 'No Genres Available';
  }
  let pageCount = book.volumeInfo.pageCount;
  if (!pageCount) {
    pageCount = 'Page Count Not Available';
  } else {
    pageCount += ' pages';
  }
  let description = book.volumeInfo.description;
  if (!description) {
    description = 'No Description Available';
  }

  let button = <></>
  if (onShelf) {
    button = <button
      id={book.id}
      className="btn-disabled"
    >
      On Shelf
    </button>
  } else {
    button = <button
      id={book.id}
      onClick={addBook}
    >
      Add To Shelf
    </button>
  }

  return (
    <div className="bookToAdd">
      <div className="col-1">
        {coverImage}
        {button}
      </div>
      <div className="col-2">
        <h3>{title}</h3>
        <p>{authors}</p>
        <p>{publishedDate}</p>
        <p>{categories}</p>
        <p>{pageCount}</p>
      </div>
      <div className="col-3">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BookFromSearch;