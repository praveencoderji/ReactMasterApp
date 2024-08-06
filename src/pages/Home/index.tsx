
import s from '../../styles/Homepage.module.scss'
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
    return (

        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="w-full bg-white shadow-md py-4">
          <ul className="flex flex-col ml-5 md:flex-row md:ml-0 justify-center md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <NavLink
                to="/"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tic-tac-toe"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                Tic-Tac-Toe Game
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/file-explorer"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                File Directory App
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/counter-app"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                Counter App with redux
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todos"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                Todos App with contextAPI
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jira-app"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                Jira Board
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop-checkout"
                className="text-lg font-semibold text-gray-700 hover:text-blue-500"
              >
                Cart (with Class Component)
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-0">
          <h1 className="text-4xl font-bold text-gray-800 mt-10 text-center md:text-left">Welcome to the Homepage</h1>
          <p className="mt-4 text-gray-600 text-center md:text-left">Navigate using the links above.</p>
        </main>
      </div>
      
    );
}

export default HomePage;