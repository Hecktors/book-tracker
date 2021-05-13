import { Component } from "react"
import PropTypes from "prop-types"

export default class Book extends Component() {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
  }

  state = {
    isBookMenuOpen: false,
    isConfirmLayerOpen: false,
  }

  handleClick() {
    book.hasOwnProperty("shelf") ? this.setState({ isBookMenuOpen: true }) : this.setState({ isConfirmLayerOpen: true })
  }

  closeConfirmLayer() {
    this.state({ isConfirmLayerOpen: false })
  }

  addBook() {
    updateBook(book)
    this.state({ isConfirmLayerOpen: false })
  }

  removeBook() {
    updateBook(book, "")
    this.state({ isBookMenuOpen: false })
  }

  updateBook(shelf) {
    updateBook(book, shelp)
    this.state({ isBookMenuOpen: false })
  }

  render() {
    const { book, updateBook } = this.props
    const text = "Do you want to add this book?"
    const bntText = "Add"
    const bookInfo = (
      <>
        {" "}
        <p className="authors">{book.authors.map((author, i) => (author + i < authors.length + 1 ? "<br/>" : ""))}</p>
        <p className="title">{book.title}</p>
      </>
    )

    return (
      <div onClick={this.handleClick}>
        <img src={book.smallThumbnail} alt="Book cover" />
        {bookInfo}
      </div>
    )
  }
}
