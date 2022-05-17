import * as React from 'react';
import {Cell} from '../modules/Cell';

interface CellProp {
    cell: Cell
}

function CellComponent({cell}: CellProp) {
    return (
        <div className={["cell", cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt='figure'/>}
        </div>
    );
}

export default CellComponent;