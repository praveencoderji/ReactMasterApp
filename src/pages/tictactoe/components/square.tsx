import { FC } from "react";
import s from '../Tictactoe.module.scss'

interface SqaureProps {
    value: string | null;
    onSquareClick: () => void;
}

const Sqaure: FC<SqaureProps> = ({ value = null, onSquareClick }) => {
    return (
        <button className={s["square"]} onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default Sqaure;