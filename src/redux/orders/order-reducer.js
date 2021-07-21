import {orders} from "./order.data";

const INITIAL_STATE = {
    orders: [...orders],
    loading: false,
    error: null,
    singleOrder: {}
};

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectBankLogins = orders => {
    return orders.filter(order => order.type === 'Login');
}


export const selectCCDumps = orders => {
    return orders.filter(order => order.type === 'Dump');
}

export default ordersReducer;
