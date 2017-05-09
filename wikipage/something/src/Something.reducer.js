const INITIAL_STATE = {
  content: null
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'update-content') {
    if (state.content !== null) {
      return Object.assign({}, state, {
        content: null
      });
    } else {
      return Object.assign({}, state, {
        content: 'Content updated!'
      });
    }  
  }
  return state;
}

export default reducer;
