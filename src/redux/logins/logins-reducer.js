import {GET_LOGINS_FAILURE, GET_LOGINS_REQUEST, GET_LOGINS_SUCCESS} from "./logins-action-types";

const INITIAL_STATE = {
    logins: [],
    loading: false,
    error: null,
    singleLogin: {}
};

const loginsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_LOGINS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_LOGINS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                logins: action.payload
            }

        case GET_LOGINS_FAILURE:
            return {
                ...state,
                loading: false,
                logins: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default loginsReducer;
