import api from './api'
import {ACTION_TYPES} from "./event"

export const register = (data, onSuccess) => dispatch => {
    api.user().register(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}
