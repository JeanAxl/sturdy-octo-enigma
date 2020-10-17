var ADD_PROJECT = 'ADD_PROJECT';
var addProjectActionCreator = function (payload) { return ({
    type: ADD_PROJECT,
    payload: payload,
}); };
export { addProjectActionCreator, ADD_PROJECT };
