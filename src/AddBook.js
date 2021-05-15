import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import AddIcon from "./icons/add_circle.svg"

export default function AddBook() {
  return (
    <AddBookStyled className="AddBook">
      <Link to="/search">
        <div className="icon-container">
          <img src={AddIcon} alt="Add book" />
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

  .icon-container {
    width: 128px;
    height: 192px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
`
