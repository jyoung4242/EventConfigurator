import React from "react"
import { connect } from "react-redux"
import "./navbar.css"
import { updateActiveEvent, updateEventIndex, deleteButtonToggle } from "../redux"

function NavBar(props) {
  var arry = []
  arry = props.events

  function handleClick(i) {
    //console.log(i)
    //send action over to another component
    // i = the STP# of each "event"
    props.updateActiveEvent(i)
    props.updateEventIndex(lookUpEventIndex(i))
    props.deleteButtonToggle(true)

    return
  }

  function lookUpEventIndex(i) {
    var elem = props.events
    //console.log(elem)
    var loop = 0
    for (const element of elem) {
      //console.log(element)

      if (element.children[0].value === i) {
        // console.log(element.children[0].value)
        return loop
      }
      loop += 1
    }
  }

  return (
    <div className="listbox-area">
      <div>
        <span id="ss_title">StoryPoints</span>
        <ul onClick={(e) => handleClick(e.target.innerHTML)} id="sseventlist" tabIndex="0" role="listbox">
          {arry.map((element) => {
            return <li key={element.children[0].value}>{element.children[0].value}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveEvent: (payload) => dispatch(updateActiveEvent(payload)),
    updateEventIndex: (payload) => dispatch(updateEventIndex(payload)),
    deleteButtonToggle: (payload) => dispatch(deleteButtonToggle(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
