import React from "react"
import PropTypes from "prop-types"

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default function Shelf({ books, updateBook }) {
  return <div></div>
}
