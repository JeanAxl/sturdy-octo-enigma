import React from 'react';
import { useProjects } from '$src/hooks/useProjects';
import { ProjectsList } from '$src/ui/components/ProjectsList/ProjectsList';
var ProjectListContainer = function () {
    var getProjects = useProjects().getProjects;
    var projects = getProjects();
    return React.createElement(ProjectsList, { projects: projects });
};
export { ProjectListContainer };
