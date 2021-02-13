import React from 'react';
import BookFromSearch from './BookFromSearch.jsx';

const SearchResults = ({searchResults}) => {
  let view = <></>
  if (searchResults.length == 0) {
    view = <div className="noResults">Search For Books</div>
  } else {
    view =
      <div className="results">

        {searchResults.map((book, i) =>
          <BookFromSearch book={book} key={i}/>
        )}

      </div>
  }
  return (
    <div className="searchResults">
      {view}
    </div>
  )
}

export default SearchResults;