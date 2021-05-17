import PropTypes from "prop-types"
import styled from "styled-components/macro"
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
    <ShelfStyled>
      <h2 className="shelf-title">{shelf.title}</h2>
      <div className="book-container">
        {shelf.books.map((book) => (
          <Book
            key={book.id}
            book={book}
            selectedBook={selectedBook}
            updateBook={updateBook}
            updateSelectedBook={updateSelectedBook}
          />
        ))}
        <AddBook />
      </div>
    </ShelfStyled>
  )
}

const ShelfStyled = styled.div`
  padding: 30px 0;
  width: 100%;

  .book-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 540px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 720px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1080px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`
