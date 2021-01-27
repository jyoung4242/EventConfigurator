import React from "react"
import "./modal.css"
import { connect } from "react-redux"
import { modalToggle } from "../redux"

function ModalOverlay(props) {
  return props.modalState ? <div id="modal-overlay" className="modal-overlay"></div> : ""
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalOverlay)
