import {
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_IN_REQUEST,
    SIGN_IN_FAILURE
} from './auth-action-types';

const INITIAL_STATE = {
    loading: false,
    token: null,
    user: null,
    error: ""
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
                error: ""
            }

        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                token: null,
                user: null,
                error: action.payload
            }

        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
                error: ""
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
                token: null,
                user: null,
                error: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;
