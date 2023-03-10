// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  EatingMango = () => {
    const {key1} = this.state
    this.setState(preState => ({key1: preState.key1 + 1}))
  }

  EatingBanana = () => {
    const {key2} = this.state
    this.setState(preState => ({key2: preState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg-container">
        <div className="bg-container2">
          <h1>
            Bob ate {key1} mangoes {key2} bananas
          </h1>
          <div className="components-box">
            <div className="innerComponent1">
              <img
                alt="mango"
                className="img1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.EatingMango}>Eat Mango</button>
            </div>
            <div className="innerComponent2">
              <img
                alt="banana"
                className="img2"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.EatingBanana}>Eat banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
