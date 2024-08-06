import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement
} from "../../redux/counterSlice"
import { RootState } from "../../redux/root-state";

const CounterApp = () => {
    const { count } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    return (
        <> 
        <div className='mr-3 underline'>
            <a href='/' > {'<'}Back to Home  </a>
        </div>
            <div className="flex items-center flex-col relative h-screen ">

                <div className="absolute top-[40%] ">
                    <div className="text-center font-medium text-lg mb-4"> {count}</div>
                    <hr />
                    <button
                        aria-label="Increment value"
                        onClick={() => {
                            dispatch(increment());
                        }}
                        className="ml-1 mt- 2 px-2  text-lg font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700"
                    >
                        Increase
                    </button>

                    <button
                        aria-label="Decrement value"
                        disabled={count === 0}
                        onClick={() => {
                            dispatch(decrement());
                        }}
                        className="ml-1 mt-2 px-2  text-lg font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700"
                    >
                        Decrease
                    </button>
                </div>
            </div>
        </>
    );
};
export default CounterApp;