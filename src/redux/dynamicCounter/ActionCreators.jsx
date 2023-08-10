import { DDECREMENT, DINCREMENT, DRESET } from "./ActionTypes"

export const dincrement = (value) => {
    return {
        type: DINCREMENT,
        payload: value,
    };
};

export const ddecrement = (value) => {
    return {
        type: DDECREMENT,
        payload: value,
    };
};

export const dreset = () => {
    return {
        type: DRESET,
    };
};