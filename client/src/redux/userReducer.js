import { SET_USER } from "./types"

function noop(){}

const initialState = {
    token: '',
    userId: '',
    login: noop,
    logout: noop,
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return { ...action.payload }

        default: return state
    }
}