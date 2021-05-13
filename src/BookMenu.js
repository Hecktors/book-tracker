import React from "react"
import PropTypes from "prop-types"

BookMenu.propTypes = {
  shelf: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
}

export default function BookMenu({ shelf, update, cancel }) {
  function handleCancel(e) {
    e.stopPropagation()
    cancel()
  }
  return (
    <div>
      <p>Move to...</p>
      <button className="btnMenu" disabled={shelf === "currentlyReading"} onClick={() => update("currentlyReading")}>
        Currently reading
      </button>
      <button className="btnMenu" disabled={shelf === "wantToRead"} onClick={() => update("wantToRead")}>
        Want to read
      </button>
      <button className="btnMenu" disabled={shelf === "read"} onClick={() => update("read")}>
        Read
      </button>
      <p>{""}</p>
      <button className="btnMenu" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  )
}
