import React, { Component } from 'react'
import './CardForm.css'

class CardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            len: 0
        }
    }

    render() {
        return (
            <div className="retro-card-form">
                <textarea onChange={(e) => this.changeText(e)} value={this.state.text} />
                <div>
                    <button onClick={(e) => this.addCard()}>Add</button>
                    <button onClick={this.props.hideFormCallback}>Cancel</button>
                    <span>{this.state.len}</span>
                </div>
            </div>
        )
    }
    addCard() {
        this.props.addCardCallback(this.state.text)
    }
    changeText(e) {
        this.setState({
            text: e.target.value,
            len: e.target.value.length
        })
    }
}

export default CardForm