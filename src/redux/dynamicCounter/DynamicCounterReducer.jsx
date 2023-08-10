import { DDECREMENT, DINCREMENT, DRESET } from "./ActionTypes"

const initialState = {
    count: 0,
}

const DynamicCounterReducer = (state = initialState, aciton) => {
    switch (aciton.type) {
        case DINCREMENT:
            return {
                ...state,
                count: state.count + aciton.payload,
            }
        case DDECREMENT:
            return {
                ...state,
                count: state.count - aciton.payload,
            }
        case DRESET:
            return {
                ...state,
                count: 0,
            }
        default:
            return state;
    }
}

export default DynamicCounterReducer;