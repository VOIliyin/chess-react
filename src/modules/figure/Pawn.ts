import {Figure, NameFigure} from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/black-pawn.png'
import whitekLogo from '../../assets/white-pawn.png'

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK
            ? blackLogo
            : whitekLogo
        this.name = NameFigure.PAWN;
    }
}