import { createStore, combineReducers } from 'redux';
import projects from './projects';

const rootReducer = combineReducers({ projects });

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
