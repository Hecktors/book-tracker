import { Component } from "react"
import PropTypes from "prop-types"
import { search } from "./BookAPI"

export default class Search extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired,
  }
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
