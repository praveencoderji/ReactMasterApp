
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TicTacToeHome from './tictactoe';


const TicTacToeApp: React.FC = (): JSX.Element => {
    const isAuthorized: boolean = true

    if (!isAuthorized) {
        return <Navigate to="/" />;
    }

    return (
        <Router>
        <Routes>
            <Route path={'/tic-tac-toe'} element={<TicTacToeHome />} />
        </Routes>
   </Router>
    );

}

export default TicTacToeApp;