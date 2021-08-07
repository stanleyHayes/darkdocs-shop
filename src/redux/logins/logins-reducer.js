import {GET_LOGINS_FAILURE, GET_LOGINS_REQUEST, GET_LOGINS_SUCCESS} from "./logins-action-types";

const INITIAL_STATE = {
    logins: [],
    loading: false,
    error: null,
    singleLogin: {},
    loginsCount: 0
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
                logins: action.payload.logins,
                loginsCount: action.payload.loginsCount
            }

        case GET_LOGINS_FAILURE:
            return {
                ...state,
                loading: false,
                logins: [],
                error: action.payload,
                loginsCount: 0
            }
        default:
            return state;
    }
}

export default loginsReducer;
