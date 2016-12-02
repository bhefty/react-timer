import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'

// Load foundation-sites

$(document).foundation()

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Timer } />
      <Route path='countdown' component={ Countdown } />
    </Route>
  </Router>,
  document.getElementById('app')
)
