import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from "./auth-action-types";
import axios from "axios";
import {DARKDOCS_SHOP_TOKEN_KEY, DARKDOCS_SHOP_USER_KEY, DEVELOPMENT_SERVER} from "../../constants/constants";

const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}

const signInSuccess = (user, token) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: {user, token}
    }
}

const signInFailure = error => {
    return {
        type: SIGN_IN_FAILURE,
        payload: error
    }
}

export const signIn = (user, history) => {
    return dispatch => {
        dispatch(signInRequest());
        axios({
            method: 'post',
            url: `${DEVELOPMENT_SERVER}/auth/login`,
            data: user
        }).then(res => {
            const {data, token} = res.data;
            dispatch(signInSuccess(data, token));
            localStorage.setItem(DARKDOCS_SHOP_TOKEN_KEY, token);
            localStorage.setItem(DARKDOCS_SHOP_USER_KEY, JSON.stringify(data));
            history.push('/');
        }).catch(error => {
            dispatch(signInFailure(error.response.data.message));
        });
    }
}

const signUpRequest = () => {
    return {
        type: SIGN_UP_REQUEST
    }
}

const signUpSuccess = (user, token) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: {user, token}
    }
}

const signUpFailure = error => {
    return {
        type: SIGN_UP_FAILURE,
        payload: error
    }
}

export const signUp = (user, history) => {
    return dispatch => {
        dispatch(signUpRequest());
        axios({
            method: 'post',
            url: `${DEVELOPMENT_SERVER}/auth/register`,
            data: user
        }).then(res => {
            const {data, token} = res.data;
            dispatch(signUpSuccess(data, token));
            localStorage.setItem(DARKDOCS_SHOP_TOKEN_KEY, token);
            localStorage.setItem(DARKDOCS_SHOP_USER_KEY, JSON.stringify(data));
            history.push('/');
        }).catch(error => {
            dispatch(signUpFailure(error.response.data.message));
        });
    }
}
