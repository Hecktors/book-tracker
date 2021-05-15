import React from "react"
import styled from "styled-components/macro"
import BookIcon from "./icons/book.svg"

export default function Header() {
  return (
    <HeaderStyled>
      <img src={BookIcon} alt="Open book" />
      <h1>Book Tracking</h1>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007600;

  img {
    margin-right: 10px;
  }
`
