import config from '../../config/config';
import actionTypes from '../../constants/actionTypes';

const initialState = {
};

export const commonReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        default:
            return newState;
    }
};
