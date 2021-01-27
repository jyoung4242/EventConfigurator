import React from "react"
import "./eventeditor.css"
import { connect } from "react-redux"
import { updateActiveEvent, modifyButtonState, updateEvents, updateAttribute } from "../redux"

function EventEditor(props) {
  function handleUpdate(e) {
    if (props.events.length && props.activeEvent !== "NULL") {
      if (e.key === "Enter" || e.key === "Tab") {
        //Enter or Tab was pressed in field
        var res = []
        res = e.target.id.split("_")
        var childIndex = res[0]
        var propToUpdate = e.target.value
        props.updateEvents({ childIndex, propToUpdate })
        e.target.value = ""
      }
    }
  }

  function handleChange(e) {
    if (props.events.length && props.activeEvent !== "NULL") {
      //Enter or Tab was pressed in field
      var res = []
      res = e.target.id.split("_")
      var childIndex = res[0]
      var propToUpdate = e.target.value
      props.updateEvents({ childIndex, propToUpdate })
    }
  }

  function handleSelectUpdate(e) {
    if (props.events.length && props.activeEvent !== "NULL") {
      if (e.key === "Enter" || e.key === "Tab") {
        //Enter or Tab was pressed in field
        var res = []
        res = e.target.id.split("_")
        var childIndex = res[0]
        var propToUpdate = e.target.value
        props.updateEvents({ childIndex, propToUpdate })
        //this captures the input field, now capture the select field
        var newID = res[0] + "_select"
        var selectedtext = document.getElementById(newID).value
        res = selectedtext.split(":")
        propToUpdate = res[0]
        props.updateAttribute({ childIndex, propToUpdate })
      }
    }
  }

  return (
    <div className="eventdiv">
      <h1>Active Event: {props.events.length && props.activeEvent !== "NULL" ? props.activeEvent : "NULL"}</h1>
      <h2>Tab or Enter key in field updates state</h2>
      <div>
        <div className="editminidiv">
          <div>
            <span>Questname:</span>
            <input pattern="[A-Za-z0-9]+" required id="1_input" onKeyDown={(e) => handleUpdate(e)} type="text" required minLength="4" maxLength="50" size="10" />
          </div>
          <div className="statediv">
            <span className="statespan">Current State: {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[1].value : "NULL"}</span>
          </div>
        </div>
        <div className="editminidiv">
          <div>
            <span>Predecessor:</span>
            <input id="2_input" onKeyDown={(e) => handleUpdate(e)} type="text" required minLength="4" maxLength="25" size="10" />
          </div>
          <div className="statediv">
            <span className="statespan">Current State: {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[2].value : "NULL"}</span>
          </div>
        </div>
        <div className="editminidiv">
          <div style={{ display: "inline" }}>
            <span>Quest Type: </span>
            <select id="5_select">
              <option id="find_questselect" defaultValue="find">
                find: Find Something
              </option>
              <option id="kill_questselect" defaultValue="kill">
                kill: Go Defeat Something
              </option>
              <option id="interact_questselect" defaultValue="interact">
                interact: Go Interact With Something
              </option>
              <option id="xp_questselect" defaultValue="xp">
                xp: Reach XP Level
              </option>
              <option id="gold_questselect" defaultValue="gold">
                gold: Reach Gold Level
              </option>
              <option id="location_questselect" defaultValue="location">
                location: Reach Location
              </option>
            </select>
            <input id="5_input" onKeyDown={(e) => handleSelectUpdate(e)} type="text" required minLength="4" maxLength="50" size="10" />
          </div>
          <div className="statediv">
            <span className="statespan">
              Current State: {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[5].attributes.type : "NULL"} : {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[5].value : "NULL"}
            </span>
          </div>
        </div>
        <div className="editminidiv">
          <div>
            <span>Status: </span>
            <select id="6_input" onChange={(e) => handleChange(e)}>
              <option defaultValue="inactive">inactive</option>
              <option defaultValue="ready">ready</option>
              <option defaultValue="active">active</option>
              <option defaultValue="complete">completed</option>
              <option defaultValue="cancelled">cancelled</option>
            </select>
          </div>
          <div className="statediv">
            <span className="statespan">Current State: {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[6].value : "NULL"}</span>
          </div>
        </div>
        <div className="editminidiv">
          <div>
            <span>Trigger: </span>
            <select id="7_select">
              <option id="find_trigger" defaultValue="find">
                find: Go Find Something
              </option>
              <option id="kill_trigger" defaultValue="kill">
                kill: Go Defeat Something
              </option>
              <option id="interact_trigger" defaultValue="interact">
                interact: Go Interact With Something
              </option>
              <option id="xp_trigger" defaultValue="xp">
                xp: Reach XP Level
              </option>
              <option id="gold_trigger" defaultValue="gold">
                gold: Reach Gold Level
              </option>
              <option id="location_trigger" defaultValue="location">
                location: Reach Location
              </option>
            </select>
            <input id="7_input" onKeyDown={(e) => handleSelectUpdate(e)} type="text" className="editInputText" required minLength="4" maxLength="50" size="10" />
          </div>
          <div className="statediv">
            <span className="statespan">
              Current State: {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[7].attributes.type : "NULL"} : {props.events.length && props.activeEvent !== "NULL" ? props.events[props.eventIndex].children[7].value : "NULL"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    activeEvent: state.activeEvent,
    events: state.events,
    eventIndex: state.eventIndex,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveEvent: (payload) => dispatch(updateActiveEvent(payload)),
    modifyButtonState: (payload) => dispatch(modifyButtonState(payload)),
    updateEvents: (payload) => dispatch(updateEvents(payload)),
    updateAttribute: (payload) => dispatch(updateAttribute(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventEditor)
