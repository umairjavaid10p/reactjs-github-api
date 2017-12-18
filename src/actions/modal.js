export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = () => {
    return {
        type: SHOW_MODAL
    }
};

export const hideModal = () => {
    return dispatch => {
        dispatch({
            type: HIDE_MODAL
        });
    }
};
