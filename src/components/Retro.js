import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import Column from './Column'
import './Retro.css'

class Retro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    id: 0,
                    header: 'Start',
                    hasForm: false,
                    cards: [],
                }, {
                    id: 1,
                    header: 'Stop',
                    hasForm: false,
                    cards: [],
                }, {
                    id: 2,
                    header: 'Continue',
                    hasForm: false,
                    cards: [],
                },
            ]
        }
    }

    render() {
        const columns = this.state.columns.map((item, i) =>
            <Column
                key={item.id}
                header={item.header}
                cards={item.cards}
                addCardCallback={(text) => this.addCardToColumn(i, text)}
                showFormCallback={() => this.showFormCallback(i)}
                hideFormCallback={() => this.hideFormCallback(i)}
                hasForm={item.hasForm}
            />
        )

        return (
            <div className="retro-board">
                {columns}
            </div>
        )
    }

    addCardToColumn(i, text) {
        var columns = this.state.columns.slice()
        columns[i].cards.push({ id: uuidv4(), text: text })
        columns[i].hasForm = false

        this.setState({ columns: columns })
        
    }

    showFormCallback(i) {
        var columns = this.state.columns.slice()
        columns[i].hasForm = true;

        this.setState({ columns: columns })

    }

    hideFormCallback(i) {
        var columns = this.state.columns.slice()
        columns[i].hasForm = false;

        this.setState({ columns: columns })
    }
}

export default Retro