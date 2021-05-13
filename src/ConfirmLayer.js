import React from "react"
import PropTypes from "prop-types"

ConfirmLayer.propTypes = {
  confirmInfo: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
}

export default function ConfirmLayer({ confirmInfo, handleCancel, handleConfirm }) {
  const { imgURL, bookInfo, text, btnText, btnColor = "green" } = confirmInfo
  return (
    <div>
      <div className="col-left">
        <img src={imgURL} alt="Book cover" />
        {bookInfo}
      </div>

      <div className="col-right">
        <p>{text}</p>
        <div className="button-container">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button style={{ background: btnColor }} className="btn-confirm" onClick={handleConfirm}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  )
}
