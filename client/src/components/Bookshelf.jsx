import React from 'react';
import TBR from './TBR.jsx';

const Bookshelf = ({allBooks, changeView}) => {
  //Currently Reading Shelf
  let currentBooks = allBooks.filter(book => book.status === 'Currently Reading');
  let currentShelf = <></>;
  if (currentBooks.length === 0) {
    currentShelf = <div className="current-shelf">
      <div className="shelf-message">
        <p>No books marked as "currently reading"</p>
      </div>
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
      <div className="shelf-message">
        <p>No books marked as "finished"</p>
      </div>
    </div>
  } else {
    readShelf = <div className="read-shelf">
      read books here
    </div>
  }

  // TBR Shelf
  let tbrBooks = allBooks.filter(book => book.status === 'To Be Read');
  let tbrShelf = <></>;
  if (tbrBooks.length === 0) {
    tbrShelf = <div className="tbr-shelf">
      <div className="shelf-message">
        <p>No books added to shelf</p>
      </div>
    </div>
  } else {
    tbrShelf = <div className="tbr-shelf">
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
      <div className="shelf-message">
        <p>No books marked as "did not finish"</p>
      </div>
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
      <div className="shelf">
        <h3>Currently Reading</h3>
          {currentShelf}
        <button>See More</button>
      </div>
      <div className="shelf">
        <h3>Read</h3>
          {readShelf}
        <button>See More</button>
      </div>
      <div className="shelf">
        <h3>To Be Read</h3>
          {tbrShelf}
        <button
          onClick={() => changeView('tbr')}
        >See More</button>
      </div>
      <div className="shelf">
        <h3>Did Not Finish</h3>
          {dnfShelf}
        <button
        >See More</button>
      </div>
    </div>
    </>
  )
}

export default Bookshelf;