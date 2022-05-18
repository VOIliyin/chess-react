import * as React from 'react';
import {Cell} from '../modules/Cell';

interface CellProp {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void
}

function CellComponent({cell, selected, click}: CellProp) {
    return (
        <div 
            className={["cell", cell.color, selected ? 'select' : ''].join(' ')}
            onClick={() => click(cell)}
            style={{backgroundColor: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <div className='available'/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt='figure'/>}
        </div>
    );
}

export default CellComponent;