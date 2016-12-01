import React, { Component } from 'react'

import Nav from 'Nav'

let Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p>Main.jsx Rendered</p>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default Main
