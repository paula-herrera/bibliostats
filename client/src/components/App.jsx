import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
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
      </div>
    )
  }
}

export default App;