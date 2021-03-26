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
        .catch(function (error) {
            if(error.response.status === 409){
                window.alert('Потребителското име вече съществува.')
            }
        })
}

export const login = (data, onSuccess) => dispatch => {
    api.user().login(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data
            })
            onSuccess()
        })
        .catch(function (error) {
            if(error.response.status === 409){
                window.alert('Този потребител вече съществува.')
            }
        })
}
