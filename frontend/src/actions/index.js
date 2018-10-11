const ROOT_URL = 'http://localhost:5000';

export const createProject = project => {
    return dispatch => {
        dispatch({
            type: 'CREATE_PROJECT',
            payload: project,
        });
    };
};

export const updateProject = update => {
    console.log('update in updateProject action is', update);
    return dispatch => {
        dispatch({
            type: 'UPDATE_PROJECT',
            payload: update,
        })
    }
}