import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"

ConfirmLayer.propTypes = {
  confirmInfo: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}

export default function ConfirmLayer({ confirmInfo, cancel, add }) {
  const { imgURL, bookInfo } = confirmInfo
  const handleCancel = (e) => {
    e.stopPropagation()
    cancel()
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    add()
  }

  return (
    <ConfirmLayerStyled>
      <div className="container">
        <div className="col-book">
          <img src={imgURL} alt="Book cover" />
          {bookInfo}
        </div>

        <div className="col-confirm">
          <p className="confirm-question">Add this book?</p>
          <div>
            <button className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn btn-add" onClick={handleAdd}>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </ConfirmLayerStyled>
  )
}

const ConfirmLayerStyled = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);

  .container {
    @media (min-width: 456px) {
      display: flex;
    }
  }

  .col-confirm {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 456px) {
      padding: 20px;
      padding-left: calc(30px + 5vw);
    }
  }

  .confirm-question {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .btn {
    font-size: 1.2rem;
    padding: 8px 10px;
    color: #fff;
    border-radius: 5px;
  }

  .btn-cancel {
    background-color: #999;
  }

  .btn-add {
    background-color: #18a818;
    margin-left: 20px;
  }
`
