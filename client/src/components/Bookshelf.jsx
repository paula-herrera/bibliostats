import React from 'react';
import TBR from './TBR.jsx';

const Bookshelf = ({allBooks, changeView}) => {
  //Currently Reading Shelf
  let currentBooks = allBooks.filter(book => book.status === 'Currently Reading');
  currentBooks.sort(function(a,b){
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  })
  let currentShelf = <></>;
  if (currentBooks.length === 0) {
    currentShelf = <div className="current-shelf">
      <div className="shelf-message">
        <p>No books marked as "currently reading"</p>
      </div>
    </div>
  } else {
    currentShelf = <div className="current-shelf">
      {currentBooks.slice(0, 5).map((book, i) =>
        <div className="shelf-cover" key={i}><img src={book.cover}></img></div>
      )}
    </div>
  }

  //Read Shelf
  let readBooks = allBooks.filter(book => book.status === 'Read');
  readBooks.sort(function(a,b){
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  })
  let readShelf = <></>;
  if (readBooks.length === 0) {
    readShelf = <div className="read-shelf">
      <div className="shelf-message">
        <p>No books marked as "finished"</p>
      </div>
    </div>
  } else {
    readShelf = <div className="read-shelf">
      {readBooks.slice(0, 5).map((book, i) =>
        <div className="shelf-cover" key={i}><img src={book.cover}></img></div>
      )}
    </div>
  }

  // TBR Shelf
  let tbrBooks = allBooks.filter(book => book.status === 'To Be Read');
  tbrBooks.sort(function(a,b){
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  })

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
  dnfBooks.sort(function(a,b){
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  })
  let dnfShelf = <></>
  if (dnfBooks.length === 0) {
    dnfShelf = <div className="dnf-shelf">
      <div className="shelf-message">
        <p>No books marked as "did not finish"</p>
      </div>
    </div>
  } else {
    dnfShelf = <div className="dnf-shelf">
      {dnfBooks.slice(0, 5).map((book, i) =>
        <div className="shelf-cover" key={i}><img src={book.cover}></img></div>
      )}
    </div>
  }



  return (
    <>
      <h1>Bookshelf</h1>
      <div className="bookshelf">
        <div className="shelf">
          <h2>Currently Reading</h2>
            {currentShelf}
          <button
            onClick={() => changeView('currentlyReading')}
          >See More</button>
        </div>
        <div className="shelf">
          <h2>Read</h2>
            {readShelf}
          <button
          onClick={() => changeView('read')}>See More</button>
        </div>
        <div className="shelf">
          <h2>To Be Read</h2>
            {tbrShelf}
          <button
            onClick={() => changeView('tbr')}
          >See More</button>
        </div>
        <div className="shelf">
          <h2>Did Not Finish</h2>
            {dnfShelf}
          <button
          onClick={() => changeView('dnf')}
          >See More</button>
        </div>
      </div>
    </>
  )
}

export default Bookshelf;