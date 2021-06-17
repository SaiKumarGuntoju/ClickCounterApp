import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="page-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="countStyle">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button type="button" className="btn" onClick={this.onClickButton}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
