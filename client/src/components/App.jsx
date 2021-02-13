import React from 'react';
import Bookshelf from './Bookshelf.jsx';
import AddABook from './AddABook.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'addABook'
    }

    this.searchBooks = this.searchBooks.bind(this);
  }

  searchBooks(query) {
    console.log(query);
  }

  render() {
    let view = <div>Test</div>
    if (this.state.view === 'bookshelf') {
      view = <Bookshelf />
    }
    if (this.state.view === 'addABook') {
      view = <AddABook searchBooks={this.searchBooks}/>
    }
    return (
      <div className="main">
        <div className="header">
          <h1 className="logo">BiblioStats</h1>
          <div className="nav">
            <div className="bookshelf-nav">Bookshelf</div>
            <div className="stats-nav">Stats</div>
            <div className="add-book-nav">Add A Book</div>
          </div>
        </div>
        {view}
      </div>
    )
  }
}

export default App;