
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FileExplorerApp from './file-explorer';


const App: React.FC<any> = (): JSX.Element => {
    const isAuthorized: boolean = true

    if (!isAuthorized) {
        return <Navigate to="/" />;
    }

    return (
        <Router>
            <Routes>
                <Route path={'/file-explorer'} element={  <FileExplorerApp />}/>
            </Routes>
        </Router>
    );

}

export default App;