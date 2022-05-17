import * as React from 'react';
import {Cell} from '../modules/Cell';

interface CellProp {
    cell: Cell
}

function CellComponent({cell}: CellProp) {
    return (
        <div className={["cell", cell.color].join(' ')}>
        </div>
    );
}

export default CellComponent;