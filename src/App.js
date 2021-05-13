import { Component } from "react"
import { getAll, update } from "./BookAPI"

class App extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    getAll()
      .then((books) => this.setState({ books }))
      .catch((err) => console.error(err))
  }

  addBook(book) {
    update(book, "wantToRead")
    const updatedBooks = [...this.state.books, { ...book, shelf: "wantToRead" }]
      .then(this.setState({ books: updatedBooks }))
      .catch((err) => console.error(err))
  }

  updateBook(book, shelf) {
    update(book, shelf)
    const updatedBooks = this.state.books.map((book) => {
      return book.id === id ? { ...book, shelf } : book
    })
    this.setState({ books: updatedBooks })
  }

  removeBook(book) {
    update(book, "")
    const updatedBooks = [...this.state.books, { ...book, shelf: "" }]
      .then(this.setState({ books: updatedBooks }))
      .catch((err) => console.error(err))
  }

  render() {
    return <div className="App"></div>
  }
}

export default App
