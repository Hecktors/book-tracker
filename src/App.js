import { Component } from "react"
import { Route } from "react-router-dom"
import styled from "styled-components/macro"
import { getAll, update } from "./BookAPI"
import Search from "./Search"
import ShelfList from "./ShelfList"

class App extends Component {
  state = {
    books: [],
    selectedBook: "",
  }

  componentDidMount() {
    this.updateAllBooks()
  }

  updateBook = (book, shelf) => {
    update(book, shelf).then((response) => {
      this.updateAllBooks()
      this.setState({ selectedBook: null })
    })
  }

  updateSelectedBook = (id) => {
    this.setState({ selectedBook: id })
  }

  updateAllBooks = () => {
    getAll()
      .then((books) => this.setState({ books }))
      .catch((err) => console.error(err))
  }

  handleClick = () => {
    console.log("click")
    this.setState({ selectedBook: null })
  }

  render() {
    return (
      <AppStyled className="App" onClick={this.handleClick}>
        <Route exact path="/">
          <h1>Book Tracking</h1>
          <ShelfList
            books={this.state.books}
            selectedBook={this.state.selectedBook}
            updateBook={this.updateBook}
            updateSelectedBook={this.updateSelectedBook}
          />
        </Route>
        <Route path="/search">
          <Search books={this.state.books} updateBook={this.updateBook} />
        </Route>
      </AppStyled>
    )
  }
}

export default App

const AppStyled = styled.div`
  max-width: 1080px;
  margin: auto;
`
