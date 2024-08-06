import React from 'react';
import { useState } from "react"
import Board from "./components/board";
import s from './Tictactoe.module.scss'

const TicTacToeHome: React.FC = () => {
    const [squaresData, setSquaresData] = useState(Array(9).fill(null))
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;

    const handlePlay = (nextSquares: string[]) => {
        setSquaresData(nextSquares);
        setCurrentMove(prev => prev + 1);
    }

    const handleReset = () => {
        setSquaresData(Array(9).fill(null))
        //setCurrentMove(0) We can if we want different patterns for x or o
    }
    return (
        <>
            <div className='items-left underline'>
                <a href='/' > {'<'}Back to Home  </a>
            </div>
            <div className={s['game-container']}>
                <div className={s["game-board"]}>
                    <Board xIsNext={xIsNext} squares={squaresData} onPlay={handlePlay} />
                </div>
                <div className={s["game-info"]}>
                    <button onClick={handleReset}>Reset Game</button>
                </div>
            </div>
        </>
    )
}

export default TicTacToeHome