import React from 'react';

const Bookshelf = () => {
  return (
    <div className="bookshelf">
      <h2>Bookshelf</h2>
      <div className="currently-reading shelf">
        <h3>Currently Reading</h3>
        <div className="recent-books">
          books will go here
        </div>
        <button>See More</button>
      </div>
      <div className="read shelf">
        <h3>Read</h3>
        <div className="recent-books">
          books will go here
        </div>
        <button>See More</button>
      </div>
      <div className="tbr shelf">
        <h3>To Be Read</h3>
        <div className="recent-books">
          books will go here
        </div>
        <button>See More</button>
      </div>
      <div className="dnf shelf">
        <h3>Did Not Finish</h3>
        <div className="recent-books">
          books will go here
        </div>
        <button>See More</button>
      </div>
    </div>
  )
}

export default Bookshelf;