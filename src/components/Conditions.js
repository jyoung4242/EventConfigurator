import React from "react"
import "./conditions.css"

import { connect } from "react-redux"
import { modifyButtonState, updateConditions } from "../redux"

function Conditions(props) {
  function dropdownone() {
    var x = props.buttonState & 1

    if (x) {
      props.modifyButtonState(props.buttonState & 30)
    } else {
      props.modifyButtonState(props.buttonState | 1)
    }
  }

  function dropdowntwo() {
    var x = props.buttonState & 2
    if (x) {
      props.modifyButtonState(props.buttonState & 29)
    } else {
      props.modifyButtonState(props.buttonState | 2)
    }
  }

  function dropdownthree() {
    var x = props.buttonState & 4
    if (x) {
      props.modifyButtonState(props.buttonState & 27)
    } else {
      props.modifyButtonState(props.buttonState | 4)
    }
  }

  function dropdownfour() {
    var x = props.buttonState & 8
    if (x) {
      props.modifyButtonState(props.buttonState & 23)
    } else {
      props.modifyButtonState(props.buttonState | 8)
    }
  }

  function dropdownfive() {
    var x = props.buttonState & 16
    if (x) {
      props.modifyButtonState(props.buttonState & 15)
    } else {
      props.modifyButtonState(props.buttonState | 16)
    }
  }

  function handleUpdate(e) {
    if (props.events.length && props.activeEvent !== "NULL")
      if (e.key === "Enter" || e.key === "Tab") {
        //Enter or Tab was pressed in field
        var res = []
        res = e.target.id.split("_")
        var child2 = res[1]
        var child1 = res[0]
        var propToUpdate = e.target.value
        console.log(res[0], res[1], propToUpdate)
        props.updateConditions({ child1, child2, propToUpdate })
        e.target.value = ""
      }
  }

  return (
    <div className="conddiv">
      <h1>Conditions:</h1>
      <h2>Tab or Enter key in field updates state</h2>
      <button onClick={dropdownone} className="accordion">
        Preconditions:
      </button>
      <div className={"majordiv " + (props.buttonState & 1 ? "cont--dropdown" : "")}>
        <div className="minidiv">
          <div>
            <span>Duration Played </span>

            <input id="3_0_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[0].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Experience Reached </span>

            <input id="3_1_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[1].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Gold Reached </span>

            <input id="3_2_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[2].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>Locations Visited </span>

            <input id="3_3_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[3].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>Enemies defeated </span>

            <input id="3_4_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[4].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>NPC's interacted with </span>

            <input id="3_5_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[5].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Tile walked on </span>

            <input id="3_6_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[6].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Items acquired </span>

            <input id="3_7_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[7].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Map Interaction </span>

            <input id="3_8_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[8].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Proximity to object: </span>

            <input id="3_9_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[9].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Proximity to location: </span>

            <input id="3_10_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[3].children[10].value : ""}</span>
          </div>
        </div>
      </div>
      <button onClick={dropdowntwo} className="accordion">
        Rewards:
      </button>
      <div className={"majordiv " + (props.buttonState & 2 ? "cont--dropdown" : "")}>
        <div className="minidiv">
          <div>
            <span>Gold: </span>

            <input id="8_0_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[8].children[0].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Experience: </span>

            <input id="8_1_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[8].children[1].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Item: </span>

            <input id="8_2_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[8].children[2].value : ""}</span>
          </div>
        </div>
      </div>
      <button onClick={dropdownthree} className="accordion">
        Victory Conditions:
      </button>
      <div className={"majordiv " + (props.buttonState & 4 ? "cont--dropdown" : "")}>
        <div className="minidiv">
          <div>
            <span>Quest duration </span>

            <input id="9_0_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[0].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Experience Reached </span>

            <input id="9_1_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[1].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Gold Reached </span>

            <input id="9_2_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[2].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>Locations Visited </span>

            <input id="9_3_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[3].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>Enemies defeated </span>

            <input id="9_4_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[4].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>NPC's interacted with </span>

            <input id="9_5_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[5].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Tile walked on </span>

            <input id="9_6_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[6].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Items acquired </span>

            <input id="9_7_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[7].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Map Interaction </span>

            <input id="9_8_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[8].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Proximity to object: </span>

            <input id="9_9_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[9].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Proximity to location: </span>

            <input id="9_10_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[9].children[10].value : ""}</span>
          </div>
        </div>
      </div>
      <button onClick={dropdownfour} className="accordion">
        Cancel Conditions:
      </button>
      <div className={"majordiv " + (props.buttonState & 8 ? "cont--dropdown" : "")}>
        <div className="minidiv">
          <div>
            <span>Quest duration </span>

            <input id="10_0_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[0].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Experience Reached </span>

            <input id="10_1_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[1].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Gold Reached </span>

            <input id="10_2_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[2].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>Locations Visited </span>

            <input id="10_3_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[3].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>Enemies defeated </span>

            <input id="10_4_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[4].value : ""}</span>
          </div>
        </div>

        <div className="minidiv">
          <div>
            <span>NPC's interacted with </span>

            <input id="10_5_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[5].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Tile walked on </span>

            <input id="10_6_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[6].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Items acquired </span>

            <input id="10_7_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[7].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Map Interaction </span>

            <input id="10_8_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[8].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Proximity to object: </span>

            <input id="10_9_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[9].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Proximity to location: </span>

            <input id="10_10_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[10].children[10].value : ""}</span>
          </div>
        </div>
      </div>
      <button onClick={dropdownfive} className="accordion">
        Pre-functions
      </button>
      <div className={"majordiv " + (props.buttonState & 16 ? "cont--dropdown" : "")}>
        <div className="minidiv">
          <div>
            <span>Teleport Party </span>

            <input id="4_0_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[4].children[0].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Journal Entry</span>

            <input id="4_1_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[4].children[1].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Run Cutscene</span>

            <input id="4_2_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[4].children[2].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Play Sound: </span>

            <input id="4_3_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[4].children[3].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Change Soundtrack: </span>

            <input id="4_4_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[4].children[4].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Modify status: </span>

            <input id="4_5_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[4].children[5].value : ""}</span>
          </div>
        </div>
      </div>
      <button onClick={dropdownfive} className="accordion">
        Post-functions
      </button>
      <div className={"majordiv " + (props.buttonState & 16 ? "cont--dropdown" : "")}>
        <div className="minidiv">
          <div>
            <span>Teleport Party </span>

            <input id="11_0_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[11].children[0].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Journal Entry</span>

            <input id="11_1_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[11].children[1].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Run Cutscene</span>

            <input id="11_2_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[11].children[2].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Play Sound: </span>

            <input id="11_3_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[11].children[3].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Change Soundtrack: </span>

            <input id="11_4_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[11].children[4].value : ""}</span>
          </div>
        </div>
        <div className="minidiv">
          <div>
            <span>Modify status: </span>

            <input id="11_5_input" onKeyDown={(e) => handleUpdate(e)} className="textinput" type="text" />
          </div>
          <div>
            <span className="statespan">Current state: {props.events.length ? props.events[props.eventIndex].children[11].children[5].value : ""}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    buttonState: state.buttonState,
    events: state.events,
    eventIndex: state.eventIndex,
    activeEvent: state.activeEvent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyButtonState: (payload) => dispatch(modifyButtonState(payload)),
    updateConditions: (payload) => dispatch(updateConditions(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conditions)
