import React, { useState } from 'react';

const Stats= ({allBooks}) => {
  const readBooks = allBooks.filter(book => book.status === 'Read');
  const dnfBooks = allBooks.filter(book => book.status === 'Did Not Finish');

  let pagesRead = 0;
  readBooks.map(book => pagesRead += book.pages);
  let averageRating = 0;
  readBooks.map(book => averageRating += book.rating);
  averageRating = averageRating / readBooks.length;

  let print = allBooks.filter(book => book.format === 'Print');
  let eBook = allBooks.filter(book => book.format === 'E-Book');
  let audio = allBooks.filter(book => book.format === 'Audio Book');
  let other = allBooks.filter(book => book.format === 'Other');

  return (
    <div className="stats">
      <h1>Stats</h1>
      <div className="stats-body">
        <div className="stats-1">
          <div className="total-books">
            <p>{readBooks.length} Book(s) Finished</p>
          </div>
          <div className="dnf-books">
            <p>{dnfBooks.length} Book(s) Did Not Finish</p>
          </div>
          <div className="pages-read">
            <p>{pagesRead} Pages Read</p>
          </div>
          <div className="average-rating">
            <p>{averageRating}/5 Average Rating</p>
          </div>
        </div>
        <div>
          <div className="print">
            <p>{print.length} Printed Books</p>
          </div>
          <div className="e-books">
            <p>{eBook.length} E-Books</p>
          </div>
          <div className="audio-books">
            <p>{audio.length} Audio Books</p>
          </div>
          <div className="other-format">
            <p>{other.length} Books in Other Formats</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;