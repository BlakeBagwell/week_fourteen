const INITIAL_STATE = {
  content: null
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'update-content') {
    return Object.assign({}, state, {
      content: action.payload.content
    });
  }
  return state;
}

export default reducer;
