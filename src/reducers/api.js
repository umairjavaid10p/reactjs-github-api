import {
    SET_API_LOADING,
    SET_API_FAILURE,
} from '../actions/user';

const initialState = {
    isLoading: false,
    apiError: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_API_LOADING:
            return {
                ...state,
                apiError: null,
                isLoading: action.payload,
            };

        case SET_API_FAILURE:
            return {
                ...state,
                apiError: action.payload,
            };

        default:
            return state;
    }
}