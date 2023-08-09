import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/counter/ActionCreators";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div className="shadow-xl p-10 my-5 bg-white rounded-lg px-3">
            <h2 className="text-6xl text-center text-gray-600 my-10 font-bold">{count}</h2>
            <div className="grid lg:grid-cols-3 grid-cols-2">
                <button onClick={handleIncrement} className="text-xl bg-blue-400 mx-5 my-3 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">Increment</button>
                <button onClick={handleDecrement} className="text-xl bg-blue-400 mx-5 my-3 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">Decrement</button>
                <button onClick={handleReset} className="text-xl bg-blue-400 mx-5 my-3 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">Reset</button>

            </div>
        </div>
    );
};

export default Counter;