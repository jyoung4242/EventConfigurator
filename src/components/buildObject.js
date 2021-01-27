import React from "react"
import { connect } from "react-redux"
import { modifyButtonState } from "../redux"
/*
  Using the current interface, build object update

*/
function buildObject(props) {
  var rslt = {
    name: "",
    attribut: "",
    children: [],
    value: "",
  }
  //11 children
  var child = {
    name: "",
    attribut: "",
    children: [],
    value: "",
  }

  rslt.name = "STP"
  //first child STPid
  child.name = "STPid"
  child.value = props.activeEvent
  rslt.children.append(child)

  //second child
  child.name = "eventName"
  child.value = props.activeEvent
  rslt.children.append(child)
}

const mapStateToProps = (state) => {
  return {
    buttonState: state.buttonState,
    activeEvent: state.activeEvent,
    events: state.events,
    eventIndex: state.eventIndex,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyButtonState: (payload) => dispatch(modifyButtonState(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(buildObject)
