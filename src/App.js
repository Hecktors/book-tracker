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
    const updatedBooks = [...this.state.books, { ...book, self: "wantToRead" }]
      .then(this.setState({ books: updatedBooks }))
      .catch((err) => console.error(err))
  }

  updateBook(book, self) {
    update(book, self)
    const updatedBooks = this.state.books.map((book) => {
      return book.id === id ? { ...book, self } : book
    })
    this.setState({ books: updatedBooks })
  }

  removeBook(book) {
    update(book, "")
    const updatedBooks = [...this.state.books, { ...book, self: "" }]
      .then(this.setState({ books: updatedBooks }))
      .catch((err) => console.error(err))
  }

  render() {
    return <div className="App"></div>
  }
}

export default App
