import React, { useState, useEffect } from 'react';

const EditBook = ({book, show, onClose, editBookDetails}) => {
  const [status, setStatus] = useState(book.status);
  const [dateStarted, setDateStarted] = useState(book.dateStarted);
  const [dateFinished, setDateFinished] = useState(book.dateFinished);
  const [format, setFormat] = useState(book.format);
  const [rating, setRating] = useState(book.rating);


  return (
    <>
      <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
          <button
              onClick={onClose}
              className="modal-button"
            ><p>X</p></button>
          </div>
          <div className="modal-body">
            <form>
              <h3>Edit Book Details</h3>
              <div className="modal-row">
                <div className="modal-input status">
                  <label htmlFor="status-select"><p>Status</p></label>
                  <select
                    name="status"
                    id="status-select"
                    onChange={() => setStatus(event.target.value)}
                  >
                      <option value={book.status}>{book.status}</option>
                      <option value="Currently Reading">Currently Reading</option>
                      <option value="Read">Read</option>
                      <option value="To Be Read">To Be Read</option>
                      <option value="Did Not Finish">Did Not Finish</option>
                  </select>
                </div>
                <div className="modal-input format">
                  <label htmlFor="format-select"><p>Format</p></label>
                  <select
                    name="format"
                    id="format-select"
                    onChange={() => setFormat(event.target.value)}
                  >
                      <option value={book.format}>{book.format}</option>
                      <option value="Print">Print</option>
                      <option value="E-Book">E-Book</option>
                      <option value="Audio Book">Audio Book</option>
                      <option value="Other">Other</option>
                  </select>
                </div>
              </div >
              <div className="modal-row">
                <div className="modal-input">
                  <label htmlFor="date-started"><p>Start Date</p></label>
                  <input
                    type="date"
                    id="date-started"
                    name="date-started"
                    value={dateStarted}
                    onChange={() => setDateStarted(event.target.value)}
                  >
                  </input>
                </div>
                  <div className="modal-input">
                  <label htmlFor="date-finished"><p>Finish Date</p></label>
                  <input
                    type="date"
                    id="date-finished"
                    name="date-finished"
                    value={dateFinished}
                    onChange={() => setDateFinished(event.target.value)}
                  >
                  </input>
                </div>
              </div>
              <div className="modal-row">
                <div className="modal-input">
                  <label htmlFor="rating-select"><p>Rating</p></label>
                  <select
                    name="rating"
                    id="rating-select"
                    onChange={() => setRating(event.target.value)}
                  >
                      <option value={book.rating}>{book.rating}</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={() => {editBookDetails(book.bookId, status, dateStarted, dateFinished, format, rating); onClose()}}
            >Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditBook;