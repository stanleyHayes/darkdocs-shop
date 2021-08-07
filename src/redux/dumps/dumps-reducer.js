import {GET_DUMPS_FAILURE, GET_DUMPS_REQUEST, GET_DUMPS_SUCCESS} from "./dumps-action-types";

const INITIAL_STATE = {
    dumps: [],
    loading: false,
    error: null,
    singleDump: {},
    ccDumpsCount: 0
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
                dumps: action.payload.dumps,
                ccDumpsCount: action.payload.ccDumpsCount
            }
        case GET_DUMPS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                dumps: [],
                ccDumpsCount: 0
            }
        default:
            return state;
    }
}

export default dumpsReducer;
