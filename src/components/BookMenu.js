import PropTypes from "prop-types"
import styled from "styled-components/macro"

BookMenu.propTypes = {
  shelf: PropTypes.string,
  update: PropTypes.func.isRequired,
}

export default function BookMenu({ shelf, update }) {
  return (
    <BookMenuStyled>
      <p className="border-bottom">Move to...</p>
      <button className="btnMenu" disabled={shelf === "currentlyReading"} onClick={() => update("currentlyReading")}>
        Currently reading
      </button>
      <button className="btnMenu" disabled={shelf === "wantToRead"} onClick={() => update("wantToRead")}>
        Want to read
      </button>
      <button className="btnMenu" disabled={shelf === "read"} onClick={() => update("read")}>
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
  background-color: #e1ffb1;
  border: 1px solid #68c893;
  text-align: left;

  button {
    width: 100%;
    text-align: left;
    display: block;
    background-color: transparent;
    padding: 0;
  }

  button:enabled:hover {
    background-color: #bedd8e;
  }

  p,
  button {
    margin: 0;
    padding: 5px;
  }

  .border-bottom {
    border-bottom: 1px solid #c4d7cc;
  }
`
