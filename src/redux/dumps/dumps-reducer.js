import {GET_DUMPS_FAILURE, GET_DUMPS_REQUEST, GET_DUMPS_SUCCESS} from "./dumps-action-types";

const INITIAL_STATE = {
    dumps: [],
    loading: false,
    error: null,
    singleDump: {}
};

const dumpsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_DUMPS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_DUMPS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                dumps: action.payload
            }
        case GET_DUMPS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                dumps: []
            }
        default:
            return state;
    }
}

export default dumpsReducer;
