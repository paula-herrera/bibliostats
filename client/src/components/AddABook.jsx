import React, { useState } from 'react';
import SearchResults from './SearchResults.jsx';

const AddABook = ({searchBooks, searchResults, addBook, allBooks}) => {
  return (
    <div className="addABook">
      <h1>Add A Book</h1>
      <div className="addABookSearch">
        <div className="search">
          <input
            id="search"
            type="text"
            placeholder="Search"
            onChange={(e) => searchBooks(e.target.value)}
          ></input>
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