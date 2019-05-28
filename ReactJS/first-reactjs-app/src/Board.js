import Square from './Square'
import React from 'react'

export default class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squareStates[i]} onClick={() => this.props.onClick(i)} />;
    }

    renderRow(i) {
        let squares = [];
        for (let j = i * 3; j < i * 3 + 3; j++) {
            squares.push(this.renderSquare(j));
        }

        return (React.createElement("div", { class: "board-row" }, squares));
    }

    render() {
        let rows = [];
        for (let i = 0; i < 3; i++) {
            rows.push(this.renderRow(i));
        }

        return (
            React.createElement("div", null, rows)
        );
    }
}