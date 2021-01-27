import React from "react"
import EventEditor from "./EventEditor"
import Conditions from "./Conditions"
import "./container.css"
import "./modal.css"
import Modal from "./modal"
import ModalOverlay from "./ModalOverlay"
import { modalToggle, resetEvents } from "../redux"
import { connect } from "react-redux"

function Content(props) {
  function handleYes() {
    props.modalToggle(false)
    props.resetEvents()
  }

  function handleNo() {
    props.modalToggle(false)
  }

  return (
    <div className="containerdiv">
      <EventEditor />
      <Conditions />
      <Modal>
        <div className="modal-button-div">
          <h3>Do you wish to reset the configurator?</h3>
        </div>

        <div className="modal-button-div">
          <button className="modal-button" onClick={handleYes}>
            Yes
          </button>
          <button className="modal-button" onClick={handleNo}>
            No
          </button>
        </div>
      </Modal>
      <ModalOverlay />
    </div>
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
    resetEvents: (payload) => dispatch(resetEvents(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
