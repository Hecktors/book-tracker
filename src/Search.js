import { Component } from "react"
import PropTypes from "prop-types"
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
  }

  searchBooks = (query) => {
    const bookIDs = this.props.books.map((book) => book.id)
    search(query)
      .then((books) => this.setState({ foundBooks: books.filter((book) => !bookIDs.includes(book.id)) }))
      .catch((err) => console.error(err))
  }

  render() {
    const shelf = { title: "Search result", books: this.state.foundBooks }
    return (
      <div>
        <SearchBar searchBooks={this.searchBooks} />
        <Shelf shelf={shelf} updateBook={this.props.updateBook} />
      </div>
    )
  }
}
