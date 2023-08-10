import { useDispatch, useSelector } from "react-redux";
import { ddecrement, dincrement, dreset } from "../../redux/dynamicCounter/ActionCreators";

const DynamicCounter = () => {
    const count = useSelector((state) => state.dynamicCounterReducer.count);
    const dispatch = useDispatch();

    const handleIncrement = (value) => {
        return dispatch(dincrement(value));
    };
    const handleDecrement = (value) => {
        return dispatch(ddecrement(value));
    };
    const handleReset = () => {
        return dispatch(dreset());
    };

    return (
        <div className="shadow-xl p-10 my-5 bg-white rounded-lg px-3">
            <h2 className="text-6xl text-center text-gray-600 my-10 font-bold">{count}</h2>
            <div className="grid lg:grid-cols-3 grid-cols-2">
                <button onClick={() => handleIncrement(5)} className="text-xl bg-blue-400 mx-5 my-3 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">Increment</button>
                <button onClick={() => handleDecrement(5)} className="text-xl bg-blue-400 mx-5 my-3 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">Decrement</button>
                <button onClick={handleReset} className="text-xl bg-blue-400 mx-5 my-3 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">Reset</button>
            </div>
        </div>
    );
};

export default DynamicCounter;