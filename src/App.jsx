import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  static propTypes = {
    bodyMaxWidth: PropTypes.number,
    designWidth: PropTypes.number,
  }

  static defaultProps = {
  bodyMaxWidth: 100,
  designWidth: 0,
  }
  constructor({bodyMaxWidth, designWidth}) {
    super()
    document.body.style.maxWidth = `${bodyMaxWidth}%`
    document.body.style.background ='FFFFFF'
    if (designWidth) {
      let screenWidth = document.documentElement.clientWidth

      if (screenWidth > bodyMaxWidth) {
        screenWidth = bodyMaxWidth
      }

      document.documentElement.style.fontSize = `${screenWidth / designWidth * 100}px`
    }
  }
  render() {
    const {children} = this.props
      return (
        <div className = 'container'>
            {children}
        </div>
      );
    }
}


export default App;
