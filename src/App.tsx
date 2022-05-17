import React, {useState, useEffect} from 'react';
import BoardComponent from './components/BoardComponent'
import { Board } from './modules/Board';
import './styles/App.scss'

function App() {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restart();
	}, [])

	function restart() {
		const newBoard = new Board();
		newBoard.initialCell();
		setBoard(newBoard);
	}

	return (
		<div className="app">
			<BoardComponent board={board} setBoard={setBoard}/>
		</div>
	);
}

export default App;
