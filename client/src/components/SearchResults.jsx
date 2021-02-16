import React from 'react';
import BookFromSearch from './BookFromSearch.jsx';

const SearchResults = ({searchResults, addBook, allBooks}) => {
  let view = <></>
  if (searchResults.length === 0) {
    view = <div className="no-results">Search For Books</div>
  } else {
    view =
      <div className="results">
        {searchResults.map((book, i) => {
          let onShelf = false;
          for (var shelfBook of allBooks) {
            if (book.id === shelfBook.bookId) {
              onShelf = true;
            }
          }
          return (
            <BookFromSearch
            book={book}
            key={i}
            addBook={addBook}
            onShelf={onShelf}
          />
          )
          })}
      </div>
  }

  return (
    <div className="searchResults">
      {view}
    </div>
  )
}

export default SearchResults;