import { Component } from "react"
import { search } from "./BookAPI"

export default class Search extends Component {
  state = {
    foundBooks: [],
  }

  searchBooks = (query) => {
    search(query)
      .then((books) => this.setState({ books }))
      .catch((err) => console.log(err))
  }

  render() {
    return <div></div>
  }
}
