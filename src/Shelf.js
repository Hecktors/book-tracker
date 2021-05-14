import React from "react"
import PropTypes from "prop-types"
import Book from "./Book"
import AddBook from "./AddBook"

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  selectedBook: PropTypes.string,
  updateBook: PropTypes.func,
  updateSelectedBook: PropTypes.func,
}

export default function Shelf({ shelf, updateBook, selectedBook, updateSelectedBook }) {
  return (
    <div>
      <h2 className="shelf-title">{shelf.title}</h2>
      {shelf.books.map((book) => (
        <Book
          key={book.id}
          book={book}
          selectedBook={selectedBook}
          updateBook={updateBook}
          updateSelectedBook={updateSelectedBook}
        />
      ))}
      {shelf.title === "Want to read" && <AddBook />}
    </div>
  )
}
