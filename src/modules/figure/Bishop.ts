import {Figure, NameFigure} from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/black-bishop.png'
import whitekLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK
            ? blackLogo
            : whitekLogo
        this.name = NameFigure.BISHOP;
    }
}