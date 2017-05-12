const INITIAL_STATE = {
  username: '',
  email: '',
  first: '',
  last: '',
  password: '',
  confirm: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'change-state') {
    let something = action.propName;
    console.log(something);
    return Object.assign({}, state, {
      [something]: action.value
    });
  } else if (action.type === 'submit-form') {
    return Object.assign({}, state, {
      username: '',
      email: '',
      first: '',
      last: '',
      password: '',
      confirm: ''
    });
  }
  return state;
}
