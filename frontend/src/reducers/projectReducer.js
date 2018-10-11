const ProjectReducer = (project = {}, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			return action.payload;

		case 'FETCHED_MENU':
			const copyVenues = [...venues];
			copyVenues.forEach(venue=>{
				if(venue.id === action.payload.venueId){
					venue.menus = action.payload;
				}
			});
            return copyVenues;
        default:
            return project;
    }
}

export default ProjectReducer;