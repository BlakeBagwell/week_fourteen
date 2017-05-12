const INITIAL_STATE = {
  loginUsername: '',
  loginPassword: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'login-change-state') {
    let something = action.propName;
    return Object.assign({}, state, {
      [something]: action.value
    });
  }
  return state;
}
