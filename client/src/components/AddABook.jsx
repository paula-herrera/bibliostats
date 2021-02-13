import React from 'react';
import SearchResults from './SearchResults.jsx';

class AddABook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    }

    this.searchVal = this.searchVal.bind(this);
    this.submit = this.submit.bind(this);
  }

  searchVal(e) {
    this.setState({searchVal: e.target.value});
  }

  submit() {
    this.props.searchBooks(this.state.searchVal);
  }

  render() {
    return (
      <div className="addABook">
        <h2>Add A Book</h2>
        <div className="addABookSearch">
          <div className="search">
            <input
              id="search"
              type="text"
              placeholder="Search"
              onChange={this.searchVal}
            ></input>
            <button
              onClick={this.submit}
            >Go!</button>
          </div>
          <SearchResults
            searchResults={this.props.searchResults}
          />
        </div>
      </div>
    )
  }
}

export default AddABook;