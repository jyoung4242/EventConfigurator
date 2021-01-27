import { APPEND_EVENT, XML_BUTTON_TOGGLE, RESET_EVENTS, MODAL_TOGGLE, SAVE_BUTTON_TOGGLE, DELETE_BUTTON_TOGGLE, UPDATE_ACTIVE_EVENT, BUTTON_STATE, EVENT_INDEX, DELETE_EVENT, UPDATE_EVENT, UPDATE_ATTRIBUTE, UPDATE_CONDITIONS } from "./eventTypes"

export const saveButtonToggle = (data) => {
  return {
    type: SAVE_BUTTON_TOGGLE,
    payload: data,
  }
}
export const xmlButtonToggle = (data) => {
  return {
    type: XML_BUTTON_TOGGLE,
    payload: data,
  }
}
export const deleteButtonToggle = (data) => {
  return {
    type: DELETE_BUTTON_TOGGLE,
    payload: data,
  }
}

export const appendEvent = (data) => {
  return {
    type: APPEND_EVENT,
    payload: data,
  }
}

export const updateActiveEvent = (data) => {
  return {
    type: UPDATE_ACTIVE_EVENT,
    payload: data,
  }
}

export const updateEvents = (data) => {
  return {
    type: UPDATE_EVENT,
    payload: data,
  }
}

export const updateConditions = (data) => {
  return {
    type: UPDATE_CONDITIONS,
    payload: data,
  }
}

export const resetEvents = (data) => {
  return {
    type: RESET_EVENTS,
    payload: data,
  }
}
export const updateAttribute = (data) => {
  return {
    type: UPDATE_ATTRIBUTE,
    payload: data,
  }
}

export const modifyButtonState = (data) => {
  return {
    type: BUTTON_STATE,
    payload: data,
  }
}

export const updateEventIndex = (data) => {
  return {
    type: EVENT_INDEX,
    payload: data,
  }
}

export const deleteEvent = (data) => {
  return {
    type: DELETE_EVENT,
    payload: data,
  }
}

export const modalToggle = (data) => {
  return {
    type: MODAL_TOGGLE,
    payload: data,
  }
}
