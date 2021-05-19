import { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import BookMenu from "./BookMenu"
import DefaultImg from "../icons/defaultImage.svg"

export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    selectedBook: PropTypes.string,
    updateBook: PropTypes.func.isRequired,
    updateSelectedBook: PropTypes.func,
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.props.selectedBook ? this.props.updateSelectedBook(null) : this.props.updateSelectedBook(this.props.book.id)
  }

  update = (shelf) => {
    this.props.updateSelectedBook(null)
    this.props.updateBook(this.props.book, shelf)
  }

  render() {
    const { book } = this.props
    const isBookMenuOpen = this.props.selectedBook === book.id

    const imgURL = book.imageLinks ? book.imageLinks.thumbnail : DefaultImg

    return (
      <BookStyled className="btn" onClick={this.handleClick}>
        {isBookMenuOpen && <BookMenu shelf={book.shelf} update={this.update} />}
        <div className="img-container">
          <img src={imgURL} alt="Book cover" />
        </div>
        <p className="book-authors">
          {book.authors &&
            book.authors.map((author, i) => {
              return (
                <span key={author}>
                  {author} {i < book.authors.length - 1 && <br />}
                </span>
              )
            })}
        </p>
        <p className="book-title">{book.title}</p>
      </BookStyled>
    )
  }
}

const BookStyled = styled.div`
  position: relative;
  width: 180px;
  justify-self: center;
  padding: 20px 10px 10px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  .img-container {
    margin: auto;
    width: 128px;
    height: 192px;
    background-color: #999;
    img {
      max-width: 100%;
      height: 100%;
    }
  }

  .book-authors {
    color: #444;
    margin: 5px 0 0 0;
  }

  .book-title {
    font-weight: 600;
    margin-top: 10px;
  }
`
