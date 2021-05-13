import React from "react"
import PropTypes from "prop-types"

Self.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default function Self({ books, updateBook }) {
  return <div></div>
}
