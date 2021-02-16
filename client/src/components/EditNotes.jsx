import React, { useState, useEffect } from 'react';

const EditNotes = ({book, show, onClose, editBookNotes}) => {
  const [notes, setNotes] = useState(book.notes);

  return (
    <>
      <div className={`edit-book-status-modal ${show ? 'show' : ''}`} onClick={onClose}>
        <div className="edit-book-status-modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
          <button
              onClick={onClose}
              className="modal-button"
            ><p>X</p></button>
          </div>
          <div className="modal-body">
            <form>
              <h3>Edit Book Notes</h3>
              <div className="modal-row">
                <div className="modal-input notes">
                <textarea id="notes" name="notes"
                          rows="25" cols="47"
                          placeholder="My notes...."
                          onChange={() => setNotes(event.target.value)}>{book.notes}
                </textarea>
                </div>
              </div >
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={() => {editBookNotes(book.bookId, notes); onClose()}}
            >Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditNotes;