import { showModal } from './modal';

export const SET_USERS_LIST = 'SET_USERS_LIST';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';
export const SET_FILTERED_USERS_LIST = 'SET_FILTERED_USERS_LIST';
export const SET_API_LOADING = 'SET_SELECTED_USER';
export const SET_API_FAILURE = 'SET_SELECTED_USER';

const setApiLoader = (payload) => {
    return {
        type: SET_API_LOADING,
        payload,
    }
};

const setApiError = (payload) => {
    return {
        type: SET_API_FAILURE,
        payload,
    }
};

const setUsersList = (payload) => {
    return {
        type: SET_USERS_LIST,
        payload,
    }
};

const setSelectedUser = (payload) => {
    return {
        type: SET_SELECTED_USER,
        payload,
    }
};

export const setFilteredUsers = (payload) => {
    return dispatch => {
        dispatch({
            type: SET_FILTERED_USERS_LIST,
            payload,
        });
    }
};


export const selectUser = (user) => {
    return dispatch => {
        dispatch(setApiLoader(true));
        fetch(`https://api.github.com/users/${user.login}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(setApiLoader(false));
                return response;
            })
            .then((response) => response.json())
            .then((json) => {
                dispatch(setSelectedUser(json));
                dispatch(showModal());
            })
            .catch((error) => dispatch(setApiError(error)));
        dispatch(setSelectedUser(user));
    }
};


export const getUsersList = () => {
    return dispatch => {
        dispatch(setApiLoader(true));
        fetch('https://api.github.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(setApiLoader(false));
                return response;
            })
            .then((response) => response.json())
            .then((json) => dispatch(setUsersList(json)))
            .catch((error) => dispatch(setApiError(error)));
    }
};