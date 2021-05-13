import React from "react"
import PropTypes from "prop-types"

ConfirmLayer.propTypes = {
  confirmInfo: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}

export default function ConfirmLayer({ confirmInfo, cancel, add }) {
  const { imgURL, bookInfo } = confirmInfo
  const handleCancel = (e) => {
    e.stopPropagation()
    cancel()
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    add()
  }

  return (
    <div>
      <div className="col-left">
        <img src={imgURL} alt="Book cover" />
        {bookInfo}
      </div>

      <div className="col-right">
        <p>"Do you want to add this book?"}</p>
        <div className="button-container">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn-confirm" onClick={handleAdd}>
            Add Book
          </button>
        </div>
      </div>
    </div>
  )
}
