import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  static propTypes = {
    // 页面最大宽度
    bodyMaxWidth: PropTypes.number,
    // 设计稿宽度
    designWidth: PropTypes.number,
  }

  static defaultProps = {
  bodyMaxWidth: 100,
  designWidth: 0,
  }
  constructor({bodyMaxWidth, designWidth}) {
    super()
    document.body.style.maxWidth = `${bodyMaxWidth}%`
    document.body.style.background ='FFFFFFF'
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
