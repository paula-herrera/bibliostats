import React from 'react';
import TBR from './TBR.jsx';

const Bookshelf = ({allBooks}) => {
  //Currently Reading Shelf
  let currentBooks = allBooks.filter(book => book.status === 'Currently Reading');
  let currentShelf = <></>;
  if (currentBooks.length === 0) {
    currentShelf = <div className="current-shelf">
      Not reading any books currently
    </div>
  } else {
    currentShelf = <div className="current-shelf">
      Books Here
    </div>
  }

  //Read Shelf
  let readBooks = allBooks.filter(book => book.status === 'Read');
  let readShelf = <></>;
  if (readBooks.length === 0) {
    readShelf = <div className="read-shelf">
      No books marked as finished
    </div>
  } else {
    readShelf = <div className="read-shelf">
      read books here
    </div>
  }

  // TBR Shelf
  let tbrBooks = allBooks.filter(book => book.status === 'To Be Read');
  console.log(tbrBooks);
  let tbrShelf = <></>;
  if (tbrBooks.length === 0) {
    tbrShelf = <div className="tbrshelf">
      Have not added any books yet
    </div>
  } else {
    tbrShelf = <div className="tbrshelf">
      {tbrBooks.slice(0, 5).map((book, i) =>
        <div className="shelf-cover" key={i}><img src={book.cover}></img></div>
      )}
    </div>
  }

  //DNF Shelf
  let dnfBooks = allBooks.filter(book => book.status === 'Did Not Finish');
  let dnfShelf = <></>
  if (dnfBooks.length === 0) {
    dnfShelf = <div className="dnf-shelf">
      Have not marked any books as did not finish
    </div>
  } else {
    dnfShelf = <div className="dnf-shelf">
      dnf books here
    </div>
  }



  return (
    <>
    <h2>Bookshelf</h2>
    <div className="bookshelf">
      <div className="currently-reading shelf">
        <h3>Currently Reading</h3>
        <div className="recent-books">
          {currentShelf}
        </div>
        <button>See More</button>
      </div>
      <div className="read shelf">
        <h3>Read</h3>
        <div className="recent-books">
          {readShelf}
        </div>
        <button>See More</button>
      </div>
      <div className="tbr shelf">
        <h3>To Be Read</h3>
        <div className="recent-books">
          {tbrShelf}
        </div>
        <button>See More</button>
      </div>
      <div className="dnf shelf">
        <h3>Did Not Finish</h3>
        <div className="recent-books">
          {dnfShelf}
        </div>
        <button>See More</button>
      </div>
    </div>
    </>
  )
}

export default Bookshelf;