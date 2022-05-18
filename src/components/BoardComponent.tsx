import React, {useState, useEffect} from 'react'
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import CellComponent from './CellComponent'

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}

function BoardComponent({board, setBoard}: BoardProps) {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        if (selectedCell) {
            highlightCell();
        }
    }
    ,[selectedCell])

    function click(cell: Cell) {
        if (cell.figure) {
            setSelectedCell(cell);
        }

        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }
    }

    function highlightCell() {
        board.highlight(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopy();
        setBoard(newBoard);
    }



    return (
        <div className="board">
            {board.cells.map((row, index) => 
                    <React.Fragment key={index}>
                        {row.map((cell) => 
                            <CellComponent 
                                cell={cell} 
                                key={cell.id} 
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                click={click}
                            />
                        )}
                    </React.Fragment>
            )}
        </div>
    );
}

export default BoardComponent;