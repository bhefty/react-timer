import React, { Component } from 'react'

import Controls from 'Controls'
import Clock from 'Clock'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
    this.startTimer = this.startTimer.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer()
          break
        case 'stopped':
          this.setState({count: 0})
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined
          break
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = undefined
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }, 1000)
  }
  handleStatusChange(newStatus) {
    this.setState({timerStatus: newStatus})
  }
  render() {
    let { count, timerStatus } = this.state
    return(
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
}

export default Timer
