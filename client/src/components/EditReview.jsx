import React, { useState, useEffect } from 'react';

const EditReview = ({book, show, onClose, editBookReview}) => {
  const [review, setReview] = useState(book.review);

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
              <h3>Edit Book Review</h3>
              <div className="modal-row">
                <div className="modal-input review">
                <textarea id="review" name="review"
                          rows="15" cols="55"
                          placeholder="My review...."
                          onChange={() => setReview(event.target.value)}>{book.review}
                </textarea>
                </div>
              </div >
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={() => {editBookReview(book.bookId, review); onClose()}}
            >Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditReview;