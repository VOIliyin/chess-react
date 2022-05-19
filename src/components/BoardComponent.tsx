import React, {useState, useEffect} from 'react'
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import { Player } from '../modules/Player';
import CellComponent from './CellComponent'

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
    swapPlayer: () => void,
    currentPlayer: Player | null
}

function BoardComponent({board, setBoard, swapPlayer, currentPlayer}: BoardProps) {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        if (board.cells.length !== 0) {
            highlightCell();
        }
    }
    ,[selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            swapPlayer();
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
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
        <div>
            <h3>Текущий игрок {currentPlayer?.color}</h3>
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
        </div>
        
    );
}

export default BoardComponent;