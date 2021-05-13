import React from "react"
import PropTypes from "prop-types"

ShelfList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default function ShelfList({ books, updateBook }) {
  const shelfs = []
  books.forEach((book) => {
    book.shelf === "currentlyReading" && shelfs[0].push(book)
    book.shelf === "wantToRead" && shelfs[1].push(book)
    book.shelf === "read" && shelfs[2].push(book)
  })
  return <div></div>
}
