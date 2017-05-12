import $ from 'jquery';
import {hashHistory} from "react-router";

export function changeState(value, propName) {
  return {
    type: 'change-state', value: value, propName: propName
  };
}

export function submitForm(username, email, firstName, lastName, password) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/api/user/signup",
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        email: email,
        first: firstName,
        last: lastName,
        password: password
      })
    })
    .then(data => {
      dispatch({
        type: "submit-form"
      })
      hashHistory.push("/login") // this is how we redirect
    });
  };
  return asyncAction;
}
