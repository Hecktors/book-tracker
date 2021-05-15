import { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { search } from "./BookAPI"
import Shelf from "./Shelf"
import SearchBar from "./SearchBar"

export default class Search extends Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }
  state = {
    foundBooks: [],
    searchTerm: "",
  }

  searchBooks = (query) => {
    const bookIDs = this.props.books.map((book) => book.id)
    search(query)
      .then((books) =>
        this.setState({ foundBooks: books.filter((book) => !bookIDs.includes(book.id)), searchTerm: query })
      )
      .catch((err) => console.error(err))
  }

  render() {
    const shelf = { title: `Search results for '${this.state.searchTerm}'`, books: this.state.foundBooks }
    return (
      <SearchStyled>
        <SearchBar searchBooks={this.searchBooks} />
        {this.state.searchTerm && <Shelf shelf={shelf} updateBook={this.props.updateBook} />}
      </SearchStyled>
    )
  }
}

const SearchStyled = styled.div`
  padding-top: 56px;
`
