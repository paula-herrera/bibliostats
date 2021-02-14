import React, { useState } from 'react';
import SearchResults from './SearchResults.jsx';

const AddABook = ({searchBooks, searchResults, addBook}) => {
  const [query, setQuery] = useState('');

  const submit = () => {
    searchBooks(query);
  }

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
            onClick={submit}
          >Go!</button>
        </div>
        <SearchResults
          searchResults={searchResults}
          addBook={addBook}
        />
      </div>
    </div>
  )
}

export default AddABook;