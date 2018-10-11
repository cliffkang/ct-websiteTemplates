const ProjectReducer = (project = {}, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
            return action.payload;
        case 'UPDATE_PROJECT':
            Object.keys(action.payload).forEach(e => {
                project[e] = action.payload[e];
            })
            return project;
        default:
            return project;
    }
}

export default ProjectReducer;