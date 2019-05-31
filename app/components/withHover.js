import React from 'react'

// Function that returns another component
export default function withHover (Component, propName = 'hovering') {
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

    // Passing props through WithHover to the Component being rendered with {...this.props}
    render () {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      }

      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      )
    }
  }
}