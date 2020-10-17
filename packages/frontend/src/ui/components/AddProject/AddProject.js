var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var AddProject = function (_a) {
    var name = _a.name, setName = _a.setName, handleAddProjectClick = _a.handleAddProjectClick;
    return (React.createElement("div", null,
        React.createElement(StyledInput, { type: 'text', value: name, name: 'name', onChange: function (ev) { return setName(ev.target.value); } }),
        React.createElement("button", { onClick: handleAddProjectClick }, "Add")));
};
export { AddProject };
var templateObject_1;
