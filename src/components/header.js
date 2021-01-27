import React from "react"
import "./header.css"
import Buttons from "./Buttons"

function Header(props) {
  return (
    <header className="head">
      <div className="">
        <h2 className="head_title">Event Configurator</h2>
        <Buttons />
      </div>
    </header>
  )
}

export default Header
