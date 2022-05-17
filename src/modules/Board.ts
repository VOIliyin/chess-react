import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figure/Queen";
import { Pawn } from "./figure/Pawn";
import { Rook } from "./figure/Rook";
import { Bishop } from "./figure/Bishop";
import { Knight } from "./figure/Knight";
import { King } from "./figure/King";

export class Board {
    cells: Cell[][] = [];

    public initialCell() {
        for(let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for(let j = 0; j < 8; j++){
                if((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null));
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null));
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addFigure() {
        this.addBishops();
        this.addKings();
        this.addKnights();
        this.addPawns();
        this.addQueens();
        this.addRooks();
    }

    private addPawns() {
        for(let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1));
            new Pawn(Colors.WHITE, this.getCell(i, 6));
        }
    }

    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0));
        new King(Colors.WHITE, this.getCell(4, 7));
    }

    private addRooks() {
        new Bishop(Colors.BLACK, this.getCell(0, 0));
        new Bishop(Colors.BLACK, this.getCell(7, 0));
        new Bishop(Colors.WHITE, this.getCell(0, 7));
        new Bishop(Colors.WHITE, this.getCell(7, 7));
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2, 0));
        new Bishop(Colors.BLACK, this.getCell(5, 0));
        new Bishop(Colors.WHITE, this.getCell(2, 7));
        new Bishop(Colors.WHITE, this.getCell(5, 7));
    }

    private addKnights() {
        new Bishop(Colors.BLACK, this.getCell(1, 0));
        new Bishop(Colors.BLACK, this.getCell(6, 0));
        new Bishop(Colors.WHITE, this.getCell(1, 7));
        new Bishop(Colors.WHITE, this.getCell(6, 7));
    }

    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0));
        new Queen(Colors.WHITE, this.getCell(3, 7));
    }
}