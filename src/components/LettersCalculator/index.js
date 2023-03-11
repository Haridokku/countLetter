import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = event => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator"
        />
        <div className="text-container">
          <h1 className="head">Calculate the Letters you enter</h1>
          <p className="para">Enter the phrase</p>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeText}
            className="input-text"
          />

          <div className="letters-container">
            <p className="text">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
