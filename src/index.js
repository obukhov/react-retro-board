import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Retro extends React.Component {
    render() {
        return (
            <div className="retro-board">
                <Column header="Start" />
                <Column header="Stop" />
                <Column header="Continue" />
            </div>
        )
    }
}

class Column extends React.Component {
    render() {
        return (
            <div className="retro-column">
                <h1 className="header">{this.props.header}</h1>
                <Card text="foo" />
                <Card text="bar" />
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