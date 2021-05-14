import React from "react"
import { Link } from "react-router-dom"

export default function AddBook() {
  return (
    <a href="localhost:3000">
      <div>
        <Link to="/search">
          <div className="addIcon">Search</div>
        </Link>
      </div>
    </a>
  )
}
