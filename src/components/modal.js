import React from "react"
import "./modal.css"
import { connect } from "react-redux"
import { modalToggle } from "../redux"

function Modal(props) {
  function closeModal() {
    props.modalToggle(false)
  }

  return props.modalState ? (
    <div id="modal" className="modal">
      <div className="modal-inner">
        <button onClick={closeModal} className="modal-close-button">
          X
        </button>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    modalState: state.modalState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalToggle: (payload) => dispatch(modalToggle(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
