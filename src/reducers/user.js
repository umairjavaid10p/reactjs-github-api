import {
    SET_USERS_LIST,
    SET_SELECTED_USER,
    SET_FILTERED_USERS_LIST
} from '../actions/user';

const initialState = {
    filteredList: [],
    list: [],
    selectedUser: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return {
                ...state,
                filteredList: action.payload,
                list: action.payload,
            };

        case SET_FILTERED_USERS_LIST:
            return {
                ...state,
                filteredList: action.payload,
            };

        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload,
            };

        default:
            return state;
    }
}