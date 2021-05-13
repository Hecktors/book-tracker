import React from "react"
import PropTypes from "prop-types"

SelfList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default function SelfList({ books, updateBook }) {
  const selfs = []
  books.forEach((book) => {
    book.self === "currentlyReading" && selfs[0].push(book)
    book.self === "wantToRead" && selfs[1].push(book)
    book.self === "read" && selfs[2].push(book)
  })
  return <div></div>
}
