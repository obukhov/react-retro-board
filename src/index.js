import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4'
import './index.css';


class Retro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    id: 0,
                    header: 'Start',
                    cards: [],
                }, {
                    id: 1,
                    header: 'Stop',
                    cards: [],
                }, {
                    id: 2,
                    header: 'Continue',
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

        this.setState({ columns: columns })
    }
}

class Column extends React.Component {
    render() {
        return (
            <div className="retro-column">
                <h1 className="header">{this.props.header}</h1>
                {this.props.cards.map((item) => <Card key={item.id} text={item.text} />)}
                <button onClick={(e) => this.props.addCardCallback('bla')}>Add</button>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="retro-card">{this.props.text}</div>
        )
    }
}

// ========================================

ReactDOM.render(
    <Retro />,
    document.getElementById('root')
)