export function changeState(value, propName) {
  return {
    type: 'change-state', value: value, propName: propName
  };
}
