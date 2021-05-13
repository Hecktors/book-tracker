import { Component } from "react"
import PropTypes from "prop-types"

export default class SearchBar extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
  }

  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchBooks(this.state.query)
    this.setState({ query: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    )
  }
}
