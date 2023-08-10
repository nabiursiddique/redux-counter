import { combineReducers } from "redux";
import CounterReducer from "./counter/CounterReducer";
import DynamicCounterReducer from "./dynamicCounter/DynamicCounterReducer";

const rootReducer = combineReducers({
    counterReducer: CounterReducer,
    dynamicCounterReducer: DynamicCounterReducer,
});

export default rootReducer;