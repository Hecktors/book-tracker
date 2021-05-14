import React from "react"
import { Link } from "react-router-dom"

export default function AddBook() {
  return (
    <Link to="/search">
      <div>
        <div className="addIcon">Search</div>
      </div>
    </Link>
  )
}
