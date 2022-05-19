import React, { useEffect, useRef, useState } from 'react'
import { Colors } from '../modules/Colors';
import { Player } from '../modules/Player';

interface Props {
    currentPlayer: Player | null,
    restart: () => void
}

function Timer({currentPlayer, restart}: Props) {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        start();
    }, [currentPlayer])

    function start() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const cb = currentPlayer?.color === Colors.BLACK
            ? decrimentBlackTimer
            : decrimentWhiteTimer
        timer.current = setInterval(cb, 1000)
    }

    function decrimentWhiteTimer() {
        setWhiteTime(prev => prev -1);
    }

    function decrimentBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function handleRestart() {
        setBlackTime(300);
        setWhiteTime(300);
        restart();
    }

    return (
        <div className="timer">
            <div>
                <button onClick={handleRestart}>Restart</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>белые - {whiteTime}</h2>
        </div>
    );
}

export default Timer;