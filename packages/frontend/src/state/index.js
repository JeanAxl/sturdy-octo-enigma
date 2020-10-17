import { createStore, combineReducers } from 'redux';
import projects from './projects';
var rootReducer = combineReducers({ projects: projects });
export default createStore(rootReducer);
