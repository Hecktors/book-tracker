import { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

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
        <Link to="/">home</Link>
        <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    )
  }
}
