import { FC, useMemo } from "react";
import Square from "./square";
import s from '../Tictactoe.module.scss'

interface BoardProps {
    xIsNext: boolean
    squares: string[]
    onPlay: (squares: string[]) => void
}
 
const Board: FC<BoardProps> = ({xIsNext, squares, onPlay}) => {


    function calculateWinner(squares: string[]) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    function handleClick(index: number) {
        if (calculateWinner(squares) || squares[index]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[index] = 'X';
        } else {
          nextSquares[index] = 'O';
        }
        onPlay(nextSquares);
      }


    const winnerStatus = useMemo(function () {
        const winner = calculateWinner(squares);
        if (winner) {
            return `Winner: ${winner}`;
        }
        if (squares.every((square) => square)) {
            return 'Draw!';
        }
        return 'Next player: ' + (xIsNext ? 'X' : 'O');
    }, [squares])
    
    return (  
        <>
      <div className={s['status']}>{winnerStatus}</div>
      <div className={s['board-row']}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={s['board-row']}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={s['board-row']}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
    );
}
 
export default Board;