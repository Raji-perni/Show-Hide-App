// Write your code here
// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isShowFirstName: false, isShowLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({isShowFirstName: !prevState.isShowFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({isShowLastName: !prevState.isShowLastName}))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {isShowFirstName && <p className="name">Joe</p>}
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={this.onShowLastName}>
              Show/Hide LastName
            </button>
            {isShowLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
