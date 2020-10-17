var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { AddProjectContainer } from '$src/ui/components/AddProject';
import { ProjectListContainer } from '$src/ui/components/ProjectsList';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var LeftContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  border-right: 2px solid darkgrey;\n  margin-right: 10em;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  border-right: 2px solid darkgrey;\n  margin-right: 10em;\n"])));
var ProjectsPage = function () {
    return (React.createElement(Container, null,
        React.createElement(LeftContainer, null,
            React.createElement(AddProjectContainer, null),
            React.createElement(ProjectListContainer, null)),
        React.createElement("div", null, "Project details")));
};
export { ProjectsPage };
var templateObject_1, templateObject_2;
