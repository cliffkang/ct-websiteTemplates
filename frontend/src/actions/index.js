import axios from 'axios';
const ROOT_URL = 'http://localhost:5000';

export const createProject = project => {
    console.log('came into createProject action', project);
    return dispatch => {
        dispatch({
            type: 'CREATE_PROJECT',
            payload: project,
        })
    };
    // axios.post(`${ROOT_URL}/createProject`, project)
    //     .then(project => {
    //         console.log('reaches here?', project.data);
    //         return dispatch => {
    //         };
    //     })
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

export const saveProject = project => {
    // axios.put(`${ROOT_URL}/saveProject`, project)
    //     .then(project => {

    //     })
    return dispatch => {
        dispatch({
            type: 'SAVE_PROJECT',
            payload: project
        })
    }
}