import React, { useState, useEffect } from 'react';

const EditBook = ({book, show, onClose}) => {
  if (!show) {
    return null;
  }

  // const closeOnEscapeKeyDown = (e) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     onClose();
  //   }
  // }

  // useEffect(() => {
  //   document.body.addEventListener('keydown', closeOnEscapeKeyDown)
  //   return function cleanup() {
  //     document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
  //   }
  // }, [])

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  let newdate = year + "-" + month + "-" + day;

  return (
    <>
      <div className="edit-book-status-modal" onClick={onClose}>
        <div className="edit-book-status-modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
          <button
              onClick={onClose}
              className="button"
            ><p>X</p></button>
          </div>
          <div className="modal-body">
            <form>
              form here
            </form>
          </div>
          <div className="modal-footer">
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditBook;