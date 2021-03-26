import { ACTION_TYPES } from "../actions/event";
const initialState = {
    list: [],
    errors: {}
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list:[...state.list, action.payload],
                errors: action.message
            }
    }
}
