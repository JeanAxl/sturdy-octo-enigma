import { Project } from '$src/domain/entities';
var getAll = function (state) { return state.map(function (project) { return new Project(project); }); };
var getByName = function (state, nameToFind) {
    var found = state.find(function (project) { return project.name === nameToFind; });
    if (found) {
        return new Project(found);
    }
    return null;
};
export { getAll, getByName };
