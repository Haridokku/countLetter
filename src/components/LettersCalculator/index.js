import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeText = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator"
        />
        <div className="text-container">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="inputElement" className="para">
            Enter the phrase
          </label>
          <input
            id="inputElement"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeText}
            className="input-text"
          />

          <div className="letters-container">
            <p className="text">No.of letters: {searchInput.length}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator

