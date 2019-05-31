import React from 'react'

// Function that returns another component
export default function withHover (Component) {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props)
      console.log('here', this.props)

      this.state = {
        hovering: false,
      }

      this.mouseOver = this.mouseOver.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
    }

    mouseOver() {
      this.setState({
        hovering: true
      })
    }

    mouseOut() {
      this.setState({
        hovering: false
      })
    }

    // Passing props through WithHover to the Component with {...this.props}
    render () {
      console.log('that', this.props)
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component hovering={this.state.hovering} {...this.props} />
        </div>
      )
    }
  }
}