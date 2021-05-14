import { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Shelf from "./Shelf"

export default class ShelfList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    selectedBook: PropTypes.string,
    updateBook: PropTypes.func.isRequired,
    updateSelectedBook: PropTypes.func.isRequired,
  }

  render() {
    const shelfs = [
      {
        name: "currentlyReading",
        title: "Currently reading",
        books: [],
      },
      {
        name: "wantToRead",
        title: "Want to read",
        books: [],
      },
      {
        name: "read",
        title: "Read",
        books: [],
      },
    ]
    const { books, selectedBook, updateBook, updateSelectedBook } = this.props

    books.forEach((book) => shelfs.forEach((shelf) => shelf.name === book.shelf && shelf.books.push(book)))
    return (
      <ShelfListStyled>
        {shelfs.map((shelf) => (
          <Shelf
            key={shelf.title}
            shelf={shelf}
            selectedBook={selectedBook}
            updateBook={updateBook}
            updateSelectedBook={updateSelectedBook}
          />
        ))}
      </ShelfListStyled>
    )
  }
}

const ShelfListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
