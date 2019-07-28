import React from 'react'
import Column from './Column'
import './Retro.css'

function Retro (props) {
    const columns = props.columns.map((column, i) =>
        <Column
            key={column.id}
            {...column}
        />
    )

    return (
        <div className="retro-board">
            {columns}
        </div>
    )
}

export default Retro