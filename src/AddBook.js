import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function AddBook() {
  return (
    <AddBookStyled className="AddBook">
      <Link to="/search">
        <div className="icon-container">
          <span className="icon">+</span>
        </div>
      </Link>
    </AddBookStyled>
  )
}

const AddBookStyled = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 10px 10px;
  transition: 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
  }

  .icon-container {
    width: 128px;
    height: 192px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    background-color: #eee;
  }

  .icon {
    width: 50px;
    height: 50px;
    border: 2px solid darkgreen;
    border-radius: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 58px;
    background-color: green;
    color: #fff;
  }
`
