import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import ArrowBack from "../icons/arrow_back.svg"

SearchBar.propTypes = {
  searchBooks: PropTypes.func.isRequired,
}

export default function SearchBar({ searchBooks }) {
  function handleChange(e) {
    e.preventDefault()
    searchBooks(e.target.value)
  }

  return (
    <SearchBarStyled>
      <div className="link-container">
        <Link to="/">
          <img src={ArrowBack} alt="Back to home" />
        </Link>
      </div>
      <input type="text" name="query" autoFocus placeholder="Search" onChange={handleChange} />
    </SearchBarStyled>
  )
}

const SearchBarStyled = styled.form`
  max-width: 1080px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  display: flex;
  border-bottom: 1px solid #bbb;
  background-color: #fff;
  z-index: 99;

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

  button {
    padding: 0 10px;
  }
`
