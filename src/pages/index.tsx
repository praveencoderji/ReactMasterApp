import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Home from "./Home";
import TicTacToeHome from "./tictactoe/tictactoe";
import FileExplorerApp from "./file-explorer/file-explorer";
import CounterApp from "./counterApp/counter";
import Todos from "./todos/todoApp";
import JiraBoard from "./jiraBoard/board";
import ProductList from "./checkout/product-list";

const Routes: React.FC = (): JSX.Element => {
    return (

        <Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path={'/tic-tac-toe'} element={<TicTacToeHome />} />
                <Route path={'/file-explorer'} element={  <FileExplorerApp />}/>
                <Route path={'/counter-app'} element={ <CounterApp/>} />
                <Route path={'/todos'} element={ <Todos/>} />
                <Route path={'/jira-app'} element={ <JiraBoard/>} />
                <Route path={'/shop-checkout'} element={ <ProductList />} />
            </Switch>

        </Router>
    );
}

export default Routes;