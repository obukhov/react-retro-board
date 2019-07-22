import React from 'react'
import Column from './Column'
import './Retro.css'

function Retro (props) {
    const columns = props.columns.map((item, i) =>
        <Column
            key={item.id}
            columnId={item.id}
            header={item.name}
        />
    )

    return (
        <div className="retro-board">
            {columns}
        </div>
    )
}

export default Retro