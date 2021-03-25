import api from "./api"

export const ACTION_TYPES = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ALL: "FETCH_ALL"
}

export const fetchAll = () => dispatch => {
    api.event().fetchAll()
        .then(response => {
            console.log(response)
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
        api.event().create()
            .then(response => {
                dispatch({
                    type: ACTION_TYPES.CREATE,
                    payload: response.data
                })
                onSuccess()
            })
            .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    api.event.update(id, data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: {id, ...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.event.delete(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}
