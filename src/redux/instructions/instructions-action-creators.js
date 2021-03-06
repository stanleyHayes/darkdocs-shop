import {
    ADD_INSTRUCTION_FAILURE,
    ADD_INSTRUCTION_REQUEST,
    ADD_INSTRUCTION_SUCCESS,
    DELETE_INSTRUCTION_FAILURE,
    DELETE_INSTRUCTION_REQUEST,
    DELETE_INSTRUCTION_SUCCESS,
    GET_INSTRUCTION_FAILURE,
    GET_INSTRUCTION_REQUEST,
    GET_INSTRUCTION_SUCCESS,
    GET_INSTRUCTIONS_FAILURE,
    GET_INSTRUCTIONS_REQUEST,
    GET_INSTRUCTIONS_SUCCESS,
    UPDATE_INSTRUCTION_FAILURE,
    UPDATE_INSTRUCTION_REQUEST,
    UPDATE_INSTRUCTION_SUCCESS
} from "./instructions-action-types";
import axios from "axios";
import {DARKDOCS_SHOP_BASE_URL_SERVER} from "../../constants/constants";

const addInstructionRequest = () => {
    return {
        type: ADD_INSTRUCTION_REQUEST
    }
}

const addInstructionSuccess = instruction => {
    return {
        type: ADD_INSTRUCTION_SUCCESS,
        payload: instruction
    }
}

const addInstructionFailure = error => {
    return {
        type: ADD_INSTRUCTION_FAILURE,
        payload: error
    }
}

export const addInstruction = (instruction, token) => {
    return dispatch => {
        dispatch(addInstructionRequest());
        axios({
            method: 'post',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/instructions`,
            headers: {Authorization: `Bearer ${token}`},
            data: instruction
        }).then(res => {
            const {data} = res.data;
            dispatch(addInstructionSuccess(data));
        }).catch(error => {
            dispatch(addInstructionFailure(error.response.data.message));
        });
    }
}


const getInstructionRequest = () => {
    return {
        type: GET_INSTRUCTION_REQUEST
    }
}

const getInstructionSuccess = instruction => {
    return {
        type: GET_INSTRUCTION_SUCCESS,
        payload: instruction
    }
}

const getInstructionFailure = error => {
    return {
        type: GET_INSTRUCTION_FAILURE,
        payload: error
    }
}

export const getInstruction = (id, token) => {
    return dispatch => {
        dispatch(getInstructionRequest());
        axios({
            method: 'get',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/instructions/${id}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(getInstructionSuccess(data));
        }).catch(error => {
            dispatch(getInstructionFailure(error.response.data.message));
        });
    }
}


const updateInstructionRequest = () => {
    return {
        type: UPDATE_INSTRUCTION_REQUEST
    }
}

const updateInstructionSuccess = instruction => {
    return {
        type: UPDATE_INSTRUCTION_SUCCESS,
        payload: instruction
    }
}

const updateInstructionFailure = error => {
    return {
        type: UPDATE_INSTRUCTION_FAILURE,
        payload: error
    }
}

export const updateInstruction = (id, instruction, token) => {
    return dispatch => {
        dispatch(updateInstructionRequest());
        axios({
            method: 'put',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/instructions/${id}`,
            headers: {Authorization: `Bearer ${token}`},
            data: instruction
        }).then(res => {
            const {data} = res.data;
            dispatch(updateInstructionSuccess(data));
        }).catch(error => {
            dispatch(updateInstructionFailure(error.response.data.message));
        });
    }
}


const deleteInstructionRequest = () => {
    return {
        type: DELETE_INSTRUCTION_REQUEST
    }
}

const deleteInstructionSuccess = instruction => {
    return {
        type: DELETE_INSTRUCTION_SUCCESS,
        payload: instruction
    }
}

const deleteInstructionFailure = error => {
    return {
        type: DELETE_INSTRUCTION_FAILURE,
        payload: error
    }
}

export const deleteInstruction = (id, token) => {
    return dispatch => {
        dispatch(deleteInstructionRequest());
        axios({
            method: 'delete',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/instructions/${id}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(deleteInstructionSuccess(data));
        }).catch(error => {
            dispatch(deleteInstructionFailure(error.response.data.message));
        });
    }
}


const getInstructionsRequest = () => {
    return {
        type: GET_INSTRUCTIONS_REQUEST
    }
}

const getInstructionsSuccess = instructions => {
    return {
        type: GET_INSTRUCTIONS_SUCCESS,
        payload: instructions
    }
}

const getInstructionsFailure = error => {
    return {
        type: GET_INSTRUCTIONS_FAILURE,
        payload: error
    }
}

export const getInstructions = (token) => {
    return dispatch => {
        dispatch(getInstructionsRequest());
        axios({
            method: 'get',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/instructions`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(getInstructionsSuccess(data));
        }).catch(error => {
            dispatch(getInstructionsFailure(error.response.data.message));
        });
    }
}
