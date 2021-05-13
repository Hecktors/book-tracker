import { Component } from "react"
import PropTypes from "prop-types"

export default class Book extends Component() {
  static defaultProps = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
  }

  state = {
    isBookMenuOpen: false,
    isConfirmLayerOpen: false,
  }

  handleClick() {
    book.hasOwnProperty("self") ? this.setState({ isBookMenuOpen: true }) : this.setState({ isConfirmLayerOpen: true })
  }

  render() {
    const { book, updateBook } = this.props

    return (
      <div onClick={this.handleClick}>
        <img src={book.smallThumbnail} alt="Book cover" />
        <p className="authors">{book.authors.map((author, i) => (author + i < authors.length + 1 ? "<br/>" : ""))}</p>
        <p className="title">{book.title}</p>
      </div>
    )
  }
}
