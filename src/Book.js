import { Component } from "react"
import PropTypes from "prop-types"
import BookMenu from "./BookMenu"
import ComfirmLayer from "./ConfirmLayer"

export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    selectedBook: PropTypes.string,
    updateBook: PropTypes.func.isRequired,
    updateSelectedBook: PropTypes.func,
  }

  state = {
    isConfirmLayerOpen: false,
  }

  handleClick = () => {
    this.props.book.hasOwnProperty("shelf")
      ? this.props.updateSelectedBook(this.props.book.id)
      : this.setState({ isConfirmLayerOpen: true })
  }

  cancel = (e) => {
    this.setState({ isConfirmLayerOpen: false })
    this.props.book.hasOwnProperty("shelf") && this.props.updateSelectedBook(null)
  }

  add = () => {
    this.props.updateBook(this.props.book, "wantToRead")
    this.setState({ isConfirmLayerOpen: false })
  }

  update = (shelf) => {
    this.props.updateSelectedBook(null)
    this.props.updateBook(this.props.book, shelf)
  }

  askRemoveComfirm = () => {
    this.setState({ isConfirmLayerOpen: true })
  }

  remove = () => {
    this.props.updateBook(this.props.book, "")
    this.setState({ isConfirmLayerOpen: false })
  }

  render() {
    const { book } = this.props
    const isBookMenuOpen = this.props.selectedBook === book.id && !this.state.isConfirmLayerOpen
    const bookInfo = (
      <>
        <p className="authors">
          {book.authors.map((author, i) => {
            return (
              <span key={author}>
                {author} {i < book.authors.length - 1 && <br />}
              </span>
            )
          })}
        </p>
        <p className="title">{book.title}</p>
      </>
    )

    const confirmInfo = { imgURL: book.imageLinks.thumbnail, bookInfo }
    return (
      <div onClick={() => this.handleClick(book)}>
        {this.state.isConfirmLayerOpen && (
          <ComfirmLayer confirmInfo={confirmInfo} cancel={this.cancel} add={this.add} />
        )}
        {isBookMenuOpen && <BookMenu shelf={book.shelf} update={this.update} cancel={this.cancel} />}

        <img src={book.imageLinks.smallThumbnail} alt="Book cover" />
        {bookInfo}
      </div>
    )
  }
}
