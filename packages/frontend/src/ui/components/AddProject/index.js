import React, { useState } from 'react';
import { AddProject } from '$src/ui/components/AddProject/AddProject';
import { useProjects } from '$src/hooks/useProjects';
var AddProjectContainer = function () {
    // Local state
    var _a = useState('Project default name'), name = _a[0], setName = _a[1];
    // Wiring to global state
    var addProject = useProjects().addProject;
    // UI Events binding
    var handleAddProjectClick = function () {
        addProject({ name: name, id: new Date().getTime() });
    };
    return React.createElement(AddProject, { handleAddProjectClick: handleAddProjectClick, name: name, setName: setName });
};
export { AddProjectContainer };
