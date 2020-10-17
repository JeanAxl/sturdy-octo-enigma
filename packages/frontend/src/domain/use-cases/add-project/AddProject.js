var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { Project } from '$src/domain/entities';
import { ProjectsState } from '$src/domain/entities/Project';
var AddProjectUseCase = /** @class */ (function () {
    function AddProjectUseCase(projectsState) {
        this.projectsState = projectsState;
    }
    AddProjectUseCase.prototype.execute = function (params) {
        var updatedProjects = this.projectsState.getAll();
        var newProject = new Project(params);
        var withSameName = this.projectsState.findByName(newProject.name);
        if (!withSameName) {
            updatedProjects = __spreadArrays(updatedProjects, [__assign({}, newProject)]);
        }
        return updatedProjects;
    };
    return AddProjectUseCase;
}());
var makeAddProjectUseCase = function (projects) {
    var projectsState = new ProjectsState(projects);
    return new AddProjectUseCase(projectsState);
};
export { makeAddProjectUseCase };
