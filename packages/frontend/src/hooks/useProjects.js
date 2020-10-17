import { useDispatch, useSelector } from 'react-redux';
import { addProjectActionCreator } from '$src/state/projects/actions';
import { getAll } from '$src/state/projects/selectors';
var useProjects = function () {
    var dispatch = useDispatch();
    var addProject = function (params) { return dispatch(addProjectActionCreator(params)); };
    var getProjects = function () { return useSelector(function (state) { return getAll(state.projects); }); };
    return { getProjects: getProjects, addProject: addProject };
};
export { useProjects };
