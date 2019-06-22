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

class Column extends React.Component {
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

class Card extends React.Component {
    render() {
        return (
            <div className="retro-card">{this.props.text}</div>
        )
    }
}

class CardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            len: 0
        }
    }

    render() {
        //
        //
        return (
            <div className="retro-card">
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

// ========================================

ReactDOM.render(
    <Retro />,
    document.getElementById('root')
)