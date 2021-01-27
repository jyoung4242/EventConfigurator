import { createStore } from "redux"
import eventReducer from "./events/eventReducer"

//const store = createStore(eventReducer)

const store = createStore(eventReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// or const store = createStore(reducer, preloadedState, devToolsEnhancer());

export default store
