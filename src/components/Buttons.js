import React from "react"
import "./buttons.css"
import XMLParser from "react-xml-parser"
import { connect } from "react-redux"
import Axios from "axios"
import XMLdata from "../events.xml"
import XMLdata1 from "./template.xml"
import { appendEvent, modalToggle, deleteEvent, saveButtonToggle, deleteButtonToggle, xmlButtonToggle, resetEvents } from "../redux"
import XMLWriter from "xml-writer"
import ReactTooltip from "react-tooltip"

function Buttons(props) {
  function handleNewEvent() {
    var len = props.events.length - 1
    //get STP of last unit
    var oldSTP = props.events[len].children[0].value
    var res = oldSTP.split("STP")
    len = parseInt(res[1]) + 1
    var newSTP = "STP" + len
    //read in template XML

    Axios.get(XMLdata1, { "Content-Type": "application/xml; charset=utf-8" }).then((response) => {
      var xml = new XMLParser().parseFromString(response.data)
      let xmlEvents = xml.getElementsByTagName("STP")
      xmlEvents[0].children[0].value = newSTP
      xmlEvents.forEach((element) => props.appendEvent(element))
    })
  }

  function handleDelEvent() {
    var rslt = window.confirm(`Are you sure you want to delete: ${props.activeEvent}`)
    if (rslt) {
      var eventToDelete = props.activeEvent
      props.deleteEvent(eventToDelete)
    }
  }

  async function handleLoadXML() {
    Axios.get(XMLdata, { "Content-Type": "application/xml; charset=utf-8" }).then((response) => {
      var xml = new XMLParser().parseFromString(response.data)
      let xmlEvents = xml.getElementsByTagName("STP")
      xmlEvents.forEach((element) => props.appendEvent(element))

      props.saveButtonToggle(true)
      props.xmlButtonToggle(false)
    })
  }

  function handleResetEvent() {
    props.modalToggle(true)
  }

  function handleSaveXML() {
    var FileSaver = require("file-saver")

    var xw = new XMLWriter(true)
    //xw.startDocument("1.0", "UTF-8")

    //setup loop through events
    //check if there are events
    if (props.events.length) {
      //props.events.forEach()

      xw.startDocument("1.0", "UTF-8")
      xw.startElement("StoryPoints")
      props.events.forEach((item) => {
        console.log(item.children[0].value)
        xw.startElement("STP")
        xw.startElement("STPid")
        xw.text(item.children[0].value)
        xw.endElement()
        xw.startElement("eventName").text(item.children[1].value).endElement()
        xw.startElement("predecessor").text(item.children[2].value).endElement()
        xw.startElement("preconditions")
        xw.startElement("duration").text(item.children[3].children[0].value).endElement()
        xw.startElement("experience").text(item.children[3].children[1].value).endElement()
        xw.startElement("gold").text(item.children[3].children[2].value).endElement()
        xw.startElement("locations").text(item.children[3].children[3].value).endElement()
        xw.startElement("enemies").text(item.children[3].children[4].value).endElement()
        xw.startElement("NPIinteractions").text(item.children[3].children[5].value).endElement()
        xw.startElement("Tile").text(item.children[3].children[6].value).endElement()
        xw.startElement("ItemAquired").text(item.children[3].children[7].value).endElement()
        xw.startElement("MapInteractions").text(item.children[3].children[8].value).endElement()
        xw.startElement("ProxObject").text(item.children[3].children[9].value).endElement()
        xw.startElement("ProxLocation").text(item.children[3].children[10].value).endElement()
        xw.endElement()
        xw.startElement("prefunctions")
        xw.startElement("Teleport").text(item.children[4].children[0].value).endElement()
        xw.startElement("Journal").text(item.children[4].children[1].value).endElement()
        xw.startElement("Cutscene").text(item.children[4].children[2].value).endElement()
        xw.startElement("PlaySound").text(item.children[4].children[3].value).endElement()
        xw.startElement("ChangeSoundtrack").text(item.children[4].children[4].value).endElement()
        xw.startElement("StatusMod").text(item.children[4].children[5].value).endElement()
        xw.endElement()
        xw.startElement("questtype").writeAttribute("type", item.children[5].attributes.type).text(item.children[5].value).endElement()
        xw.startElement("Status").text(item.children[6].value).endElement()
        xw.startElement("Trigger").writeAttribute("type", item.children[7].attributes.type).text(item.children[7].value).endElement()
        xw.startElement("Rewards")
        xw.startElement("gold").text(item.children[8].children[0].value).endElement()
        xw.startElement("xp").text(item.children[8].children[1].value).endElement()
        xw.startElement("item").text(item.children[8].children[2].value).endElement()
        xw.endElement()
        xw.startElement("Victory")
        xw.startElement("duration").text(item.children[9].children[0].value).endElement()
        xw.startElement("experience").text(item.children[9].children[1].value).endElement()
        xw.startElement("gold").text(item.children[9].children[2].value).endElement()
        xw.startElement("locations").text(item.children[9].children[3].value).endElement()
        xw.startElement("enemies").text(item.children[9].children[4].value).endElement()
        xw.startElement("NPIinteractions").text(item.children[9].children[5].value).endElement()
        xw.startElement("Tile").text(item.children[9].children[6].value).endElement()
        xw.startElement("ItemAquired").text(item.children[9].children[7].value).endElement()
        xw.startElement("MapInteractions").text(item.children[9].children[8].value).endElement()
        xw.startElement("ProxObject").text(item.children[9].children[9].value).endElement()
        xw.startElement("ProxLocation").text(item.children[9].children[10].value).endElement()
        xw.endElement()
        xw.startElement("Cancel")
        xw.startElement("duration").text(item.children[10].children[0].value).endElement()
        xw.startElement("experience").text(item.children[10].children[1].value).endElement()
        xw.startElement("gold").text(item.children[10].children[2].value).endElement()
        xw.startElement("locations").text(item.children[10].children[3].value).endElement()
        xw.startElement("enemies").text(item.children[10].children[4].value).endElement()
        xw.startElement("NPIinteractions").text(item.children[10].children[5].value).endElement()
        xw.startElement("Tile").text(item.children[10].children[6].value).endElement()
        xw.startElement("ItemAquired").text(item.children[10].children[7].value).endElement()
        xw.startElement("MapInteractions").text(item.children[10].children[8].value).endElement()
        xw.startElement("ProxObject").text(item.children[10].children[9].value).endElement()
        xw.startElement("ProxLocation").text(item.children[10].children[10].value).endElement()
        xw.endElement()
        xw.startElement("postfunctions")
        xw.startElement("Teleport").text(item.children[10].children[0].value).endElement()
        xw.startElement("Journal").text(item.children[10].children[1].value).endElement()
        xw.startElement("Cutscene").text(item.children[10].children[2].value).endElement()
        xw.startElement("PlaySound").text(item.children[10].children[3].value).endElement()
        xw.startElement("ChangeSoundtrack").text(item.children[10].children[4].value).endElement()
        xw.startElement("StatusMod").text(item.children[10].children[5].value).endElement()
        xw.endElement()

        xw.endElement()
      })
      xw.endElement()
      xw.endDocument()
      props.modalToggle(true)
    } else {
      alert("No events loaded, cancelling...")
    }

    var mystring = xw.toString()
    console.log(mystring)
    var blob = new Blob([mystring], { type: "text/plain;charset=utf-8" })
    FileSaver.saveAs(blob, `FILE_${Date.now()}.xml`)
  }

  return (
    <div className="buttondiv">
      <button data-for="clear" data-tip="Resets the form" className="headerbutton" onClick={handleResetEvent}>
        Clear Form
      </button>
      <ReactTooltip place="bottom" id="clear" className="custom-tooltip" />{" "}
      <button data-for="search" data-tip="Use to create the next STP" className="headerbutton" onClick={handleNewEvent}>
        New Event
      </button>
      <ReactTooltip place="bottom" id="search" className="custom-tooltip" />{" "}
      <button disabled={!props.deleteButtonState} data-for="delete" data-tip="Use to delete the currenly selected STP" className="headerbutton" onClick={handleDelEvent}>
        Delete Event
      </button>
      <ReactTooltip place="bottom" id="delete" className="custom-tooltip" />{" "}
      <button disabled={!props.openXMLButtonState} data-for="Open" data-tip="Use to load in events.xml" className="headerbutton" onClick={handleLoadXML}>
        Open XML
      </button>
      {props.openXMLButtonState ? <ReactTooltip place="bottom" id="Open" className="custom-tooltip" /> : ""}
      <button disabled={!props.saveXMLButtonState} data-for="export" data-tip="Use to export to new xml file" className="headerbutton" onClick={handleSaveXML}>
        Save XML
      </button>
      <ReactTooltip place="bottom" id="export" className="custom-tooltip" />{" "}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    activeEvent: state.activeEvent,
    deleteButtonState: state.deleteButtonState,
    saveXMLButtonState: state.saveXMLButtonState,
    openXMLButtonState: state.openXMLButtonState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendEvent: (payload) => dispatch(appendEvent(payload)),
    deleteEvent: (payload) => dispatch(deleteEvent(payload)),
    deleteButtonToggle: (payload) => dispatch(deleteButtonToggle(payload)),
    xmlButtonToggle: (payload) => dispatch(xmlButtonToggle(payload)),
    saveButtonToggle: (payload) => dispatch(saveButtonToggle(payload)),
    resetEvents: (payload) => dispatch(resetEvents(payload)),
    modalToggle: (payload) => dispatch(modalToggle(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
