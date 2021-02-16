import React from 'react';

const BookFromSearch = ({book, addBook}) => {
  if (book.volumeInfo.imageLinks === undefined) {
    var cover = 'https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png';
  } else {
    var cover = book.volumeInfo.imageLinks.thumbnail
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


  return (
    <div className="bookToAdd">
      <div className="col-1">
        <img src={cover}></img>
        <button
          id={book.id}
          onClick={addBook}
        >Add To Shelf</button>
      </div>
      <div className="col-2">
        <p>{title}</p>
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