import Footer from './components/footer';
import { TodoContextProvider } from './contexts/TodoContext';
import Routes from './pages';
import ReduxProvider from './redux/provider';

function App() {
  return (
    <ReduxProvider>
      <TodoContextProvider>
      <div className="App">

        <Routes />
        <Footer />
      </div>
      </TodoContextProvider>
    </ReduxProvider>
  );
}

export default App;
