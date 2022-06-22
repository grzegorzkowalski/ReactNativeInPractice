import { combineReducers } from "@reduxjs/toolkit";
import { ADD_ANSWER } from "./actions";

const initialState = {
    answers: [],
    result: 0
}

const result = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
        default:
            return state;
    }
}

const points = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            return {
                ...state,
                answers: [...state.answers, action.id]
            }
        default:
            return state;
    }
}

export default combineReducers({
    result,
    points
});
