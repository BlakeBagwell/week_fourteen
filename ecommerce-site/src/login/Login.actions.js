import $ from 'jquery';
import {hashHistory} from "react-router";

export function changeState(value, propName) {
  return {
    type: 'login-change-state',
    value: value,
    propName: propName
  }
}

export function submitForm(loginUsername, loginPassword) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:4000/api/user/login",
      data: JSON.stringify({
        loginUsername: loginUsername,
        loginPassword: loginPassword
      })
    })
    .then(data => {
      dispatch({
        type: 'login'
      })
      hashHistory.push('/')
    });
  };
  return asyncAction;
}
