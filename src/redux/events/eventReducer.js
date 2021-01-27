import { APPEND_EVENT, XML_BUTTON_TOGGLE, SAVE_BUTTON_TOGGLE, MODAL_TOGGLE, RESET_EVENTS, DELETE_BUTTON_TOGGLE, UPDATE_ACTIVE_EVENT, BUTTON_STATE, EVENT_INDEX, UPDATE_EVENT, UPDATE_ATTRIBUTE, DELETE_EVENT, UPDATE_CONDITIONS } from "./eventTypes"
import produce from "immer"
//import Axios from "axios"
//import XMLdata from "./template.xml"
//import XMLParser from "react-xml-parser"

const initialState = {
  events: [],
  activeEvent: "NULL",
  buttonState: 0,
  eventIndex: 0,
  deleteButtonState: false,
  saveXMLButtonState: false,
  openXMLButtonState: true,
  modalState: false,
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      }

    case UPDATE_ACTIVE_EVENT:
      return {
        ...state,
        activeEvent: action.payload,
      }

    case UPDATE_EVENT:
      var x = state.eventIndex
      var y = action.payload.childIndex
      var z = action.payload.propToUpdate

      return produce(state, (draft) => {
        draft.events[x].children[y].value = z
      })

    case UPDATE_ATTRIBUTE:
      x = state.eventIndex
      y = action.payload.childIndex
      z = action.payload.propToUpdate

      return produce(state, (draft) => {
        draft.events[x].children[y].attributes.type = z
      })

    case UPDATE_CONDITIONS:
      x = state.eventIndex
      var w = action.payload.child1
      y = action.payload.child2
      z = action.payload.propToUpdate

      return produce(state, (draft) => {
        draft.events[x].children[w].children[y].value = z
      })

    case BUTTON_STATE:
      return {
        ...state,
        buttonState: action.payload,
      }
    case EVENT_INDEX:
      return {
        ...state,
        eventIndex: action.payload,
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((p) => p.children[0].value !== action.payload),
        activeEvent: "NULL",
        eventIndex: 0,
      }
    case XML_BUTTON_TOGGLE:
      return {
        ...state,
        openXMLButtonState: action.payload,
      }
    case SAVE_BUTTON_TOGGLE:
      return {
        ...state,
        saveXMLButtonState: action.payload,
      }
    case DELETE_BUTTON_TOGGLE:
      return {
        ...state,
        deleteButtonState: action.payload,
      }
    case RESET_EVENTS:
      return {
        ...state,
        events: [],
        activeEvent: "NULL",
        buttonState: 0,
        eventIndex: 0,
        deleteButtonState: false,
        saveXMLButtonState: false,
        openXMLButtonState: true,
        modalState: false,
      }

    case MODAL_TOGGLE:
      return {
        ...state,
        modalState: action.payload,
      }
    default:
      return state
  }
}

export default eventReducer
