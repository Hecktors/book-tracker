import { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { search } from "../BookAPI"
import Shelf from "./Shelf"
import SearchBar from "./SearchBar"

export default class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    selectedBook: PropTypes.string,
    updateBook: PropTypes.func.isRequired,
    updateSelectedBook: PropTypes.func,
  }
  state = {
    foundBooks: [],
    searchTerm: "",
  }

  searchBooks = (query) => {
    this.setState({ searchTerm: query })
    if (!query) {
      this.setState({ foundBooks: [] })
      return
    }
    const bookIDs = this.props.books.map((book) => book.id)
    search(query)
      .then((books) => {
        if (books.error) {
          this.setState({ foundBooks: [] })
          return
        }
        this.setState({ foundBooks: books.filter((book) => !bookIDs.includes(book.id)), searchTerm: query })
      })
      .catch((err) => console.error(err))
  }

  render() {
    const shelf = { title: `Search results for '${this.state.searchTerm}'`, books: this.state.foundBooks }
    return (
      <SearchStyled>
        <SearchBar searchBooks={this.searchBooks} />
        {this.state.searchTerm && (
          <Shelf
            shelf={shelf}
            selectedBook={this.props.selectedBook}
            updateBook={this.props.updateBook}
            updateSelectedBook={this.props.updateSelectedBook}
          />
        )}
      </SearchStyled>
    )
  }
}

const SearchStyled = styled.div`
  padding-top: 56px;
`
