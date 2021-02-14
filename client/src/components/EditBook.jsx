import React, { useEffect } from 'react';

const EditBook = ({show, onClose}) => {
  if (!show) {
    return null;
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <>
      <div className="edit-book-modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            This is the header
          </div>
          <div className="modal-body">
            This is the body
          </div>
          <div className="modal-footer">
            This is the footer<br></br>
            <button
              onClick={onClose}
              className="button"
            >close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditBook;