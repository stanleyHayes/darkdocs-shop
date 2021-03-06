import {
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_IN_REQUEST,
    SIGN_IN_FAILURE,
    VERIFY_ACCOUNT_SUCCESS,
    VERIFY_ACCOUNT_FAILURE,
    VERIFY_ACCOUNT_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_FAILURE,
    FORGOT_PASSWORD_FAILURE,
    CHANGE_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    GET_LOGGED_IN_USER_FAILURE, GET_LOGGED_IN_USER_SUCCESS, GET_LOGGED_IN_USER_REQUEST
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
                loading: true,
                error: ""
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
                loading: true,
                error: ""
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

        case VERIFY_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case VERIFY_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            }

        case VERIFY_ACCOUNT_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }

        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            }

        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            }

        case CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            }

        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            }

        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case GET_LOGGED_IN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_LOGGED_IN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
            }

        case GET_LOGGED_IN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                token: null,
                error: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;
