import React from "react"
import PropTypes from "prop-types"

ConfirmLayer.propTypes = {
  imgUrl: PropTypes.bool.isRequired,
  authors: PropTypes.bool.isRequired,
  bookInfo: PropTypes.node.isRequired,
  btnText: PropTypes.string.isRequired,
  btnColor: PropTypes.string,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
}

export default function ConfirmLayer({
  imgURL,
  bookInfo,
  text,
  btnText,
  btnColor = "green",
  handleCancel,
  handleConfirm,
}) {
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
