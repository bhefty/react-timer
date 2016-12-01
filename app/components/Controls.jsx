import React, { Component } from 'react'

class Controls extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { countdownStatus } = this.props
    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className='button secondary'>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className='button primary'>Start</button>
      }
    }
    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow'>Clear</button>
      </div>
    )
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired
}

export default Controls
