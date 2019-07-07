import React, { Component } from 'react'
import Card from './Card'
import CardForm from './CardForm'
import './Column.css'

class Column extends Component {
    render() {
        return (
            <div className="retro-column">
                <h1 className="header">{this.props.header}</h1>
                {this.props.cards.map((item) => <Card key={item.id} text={item.text} />)}
                {this.props.hasForm ? <CardForm
                    hideFormCallback={this.props.hideFormCallback}
                    addCardCallback={this.props.addCardCallback}
                /> : <button onClick={this.props.showFormCallback}>Add</button>}
            </div>
        )
    }
}

export default Column