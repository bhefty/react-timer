import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

let Nav = (props) => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Timer App</li>
          <li><IndexLink to='/'  activeClassName='active-link'>Timer</IndexLink></li>
          <li><Link to='/countdown'  activeClassName='active-link'>Countdown</Link></li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>Created by <a href='https://www.billhefty.com' target='_blank'>Bill Hefty</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
