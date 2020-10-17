import React from 'react';
var ProjectsList = function (_a) {
    var projects = _a.projects;
    if (projects.length === 0) {
        return React.createElement("div", null, "No project");
    }
    return (React.createElement("div", null, projects.map(function (_a) {
        var name = _a.name, id = _a.id;
        return (React.createElement("div", { key: id }, name));
    })));
};
export { ProjectsList };
