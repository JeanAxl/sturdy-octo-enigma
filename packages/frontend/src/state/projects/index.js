import { ADD_PROJECT } from '$src/state/projects/actions';
import { addProject } from '$src/state/projects/cases';
var initialState = [];
var projects = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type;
    switch (type) {
        case ADD_PROJECT:
            return addProject(state, action);
        default:
            return state;
    }
};
export default projects;
