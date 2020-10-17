var Project = /** @class */ (function () {
    function Project(params) {
        this.name = params.name;
        this.id = params.id;
    }
    return Project;
}());
var ProjectsState = /** @class */ (function () {
    function ProjectsState(projects) {
        this.projects = projects;
    }
    ProjectsState.prototype.findByName = function (nameToFind) {
        var found = this.projects.find(function (project) { return project.name === nameToFind; });
        if (found) {
            return new Project(found);
        }
        return null;
    };
    ProjectsState.prototype.getAll = function () {
        return this.projects;
    };
    return ProjectsState;
}());
export { Project, ProjectsState };
