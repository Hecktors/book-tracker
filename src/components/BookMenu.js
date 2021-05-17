import PropTypes from "prop-types"
import styled from "styled-components/macro"

BookMenu.propTypes = {
  shelf: PropTypes.string,
  update: PropTypes.func.isRequired,
}

export default function BookMenu({ shelf, update }) {
  return (
    <BookMenuStyled>
      <p>Move to...</p>
      <button className="btnMenu" disabled={shelf === "currentlyReading"} onClick={() => update("currentlyReading")}>
        Currently reading
      </button>
      <button className="btnMenu" disabled={shelf === "wantToRead"} onClick={() => update("wantToRead")}>
        Want to read
      </button>
      <button className="btnMenu border-bottom" disabled={shelf === "read"} onClick={() => update("read")}>
        Read
      </button>
      {shelf && (
        <button className="btnMenu" onClick={() => update("None")}>
          None
        </button>
      )}
    </BookMenuStyled>
  )
}

const BookMenuStyled = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 30px;
  background-color: #eee;
  border: 1px solid #ccc;
  text-align: left;

  button {
    width: 100%;
    text-align: left;
    display: block;
    background-color: transparent;
    padding: 0;
  }

  button:enabled:hover {
    background-color: #ccc;
  }

  p,
  button {
    margin: 0;
    padding: 5px;
    font-size: 1rem;
  }

  .border-bottom {
    border-bottom: 1px solid #ddd;
  }
`
