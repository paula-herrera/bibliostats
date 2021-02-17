import React, { useState } from 'react';
import SearchResults from './SearchResults.jsx';

const AddABook = ({searchBooks, searchResults, addBook, allBooks}) => {
  const [query, setQuery] = useState('');

  return (
    <div className="addABook">
      <h1>Add A Book</h1>
      <div className="addABookSearch">
        <div className="search">
          <input
            id="search"
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button
            onClick={(e) => searchBooks(query)}
          >
            Search
          </button>
        </div>
        <SearchResults
          searchResults={searchResults}
          addBook={addBook}
          allBooks={allBooks}
        />
      </div>
    </div>
  )
}

export default AddABook;