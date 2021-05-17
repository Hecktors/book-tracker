import { Component } from "react"
import { Route } from "react-router-dom"
import styled from "styled-components/macro"
import { getAll, update } from "./BookAPI"
import Header from "./components/Header"
import Search from "./components/Search"
import ShelfList from "./components/ShelfList"

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
    this.setState({ selectedBook: null })
  }

  render() {
    return (
      <AppStyled className="App" onClick={this.handleClick}>
        <Route exact path="/">
          <Header />
          <ShelfList
            books={this.state.books}
            selectedBook={this.state.selectedBook}
            updateBook={this.updateBook}
            updateSelectedBook={this.updateSelectedBook}
          />
        </Route>
        <Route path="/search">
          <Search
            books={this.state.books}
            selectedBook={this.state.selectedBook}
            updateBook={this.updateBook}
            updateSelectedBook={this.updateSelectedBook}
          />
        </Route>
      </AppStyled>
    )
  }
}

export default App

const AppStyled = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`
