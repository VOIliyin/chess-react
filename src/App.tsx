import React, {useState, useEffect} from 'react';
import BoardComponent from './components/BoardComponent'
import { Board } from './modules/Board';
import { Player } from './modules/Player';
import { Colors } from './modules/Colors';
import './styles/App.scss'

function App() {
	const [board, setBoard] = useState(new Board());
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

	useEffect(() => {
		restart();
		setCurrentPlayer(whitePlayer);
	}, [])

	function restart() {
		const newBoard = new Board();
		newBoard.initialCell();
		newBoard.addFigure();
		setBoard(newBoard);
	}

	function swapPlayer() {
		setCurrentPlayer(currentPlayer?.color === Colors.BLACK? whitePlayer : blackPlayer);
	}

	return (
		<div className="app">
			<BoardComponent 
				board={board} 
				setBoard={setBoard}
				swapPlayer={swapPlayer}
				currentPlayer={currentPlayer}
			/>
		</div>
	);
}

export default App;
