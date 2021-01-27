import React, { useEffect } from "react"
import Header from "./components/header"
import NavBar from "./components/navbar"
import store from "./redux/store"
import Content from "./components/content"

import { Provider } from "react-redux"

function App(props) {
  useEffect(() => {
    document.title = `Main Page | Event Configurator`
    window.scrollTo(0, 0)
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <NavBar />
        <Content />
      </div>
    </Provider>
  )
}

export default App
