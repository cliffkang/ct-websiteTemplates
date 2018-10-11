import { combineReducers } from 'redux';
import { ProjectReducer } from './projectReducer';

const rootReducer = combineReducers({
    project: ProjectReducer,
});

export default rootReducer;
