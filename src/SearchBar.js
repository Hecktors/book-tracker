import { Component } from "react"
import styled from "styled-components/macro"
import styled from "styled-components"
import { Link } from "react-router-dom"
import ArrowBack from "./icons/arrow_back.svg"

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
      <SearchBarStyled onSubmit={this.handleSubmit}>
        <div className="link-container">
          <Link to="/">
            <img src={ArrowBack} alt="Back to home" />
          </Link>
        </div>
        <input
          type="text"
          name="query"
          autoFocus
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </SearchBarStyled>
    )
  }
}

const SearchBarStyled = styled.form`
  width: 100%;
  height: 56px;
  display: flex;
  border-bottom: 1px solid #bbb;

  .link-container {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    padding-left: 20px;
    flex-grow: 1;
    font-size: 1.2rem;
  }

  input,
  input:focus,
  input:active {
    border: none;
    outline: none;
  }
`
