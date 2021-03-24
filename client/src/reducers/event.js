import { ACTION_TYPES } from "../actions/event";
const initialState = {
    list: []
}

export const event = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state
    }
}