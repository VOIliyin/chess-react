import { Colors } from "../Colors"
import { Cell } from "../Cell";
import logo from '../../assets/black-king.png'

export enum NameFigure {
    FIGURE = 'фигура',
    KING = 'король',
    KNIGHT = 'конь',
    PAWN = 'пешка',
    QUEEN = 'ферзь',
    ROOK = 'ладья',
    BISHOP = 'слон'
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: NameFigure;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.logo = null;
        this.name = NameFigure.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if (target?.figure?.color === this.color) {
            return false;
        }

        if (target?.figure?.name === NameFigure.KING) {
            return false;
        }
        
        return true;
    }

    moveFigure(target: Cell) {}
}