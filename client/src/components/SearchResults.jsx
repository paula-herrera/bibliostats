import React from 'react';

const SearchResults = ({searchResults}) => {
  let view = <></>
  if (searchResults.length == 0) {
    view = <div className="noResults">Search For Books</div>
  } else {
    view = <div className="results">Books Go Here</div>
  }
  return (
    <div className="searchResults">
      {view}
    </div>
  )
}

export default SearchResults;