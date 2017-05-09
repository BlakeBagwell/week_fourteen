import $ from 'jquery';

export function fetchPage(title){
  let asynchAction= function(dispatch) {
    $.ajax({
      url: 'http://localhost:4000/api/page/' + title
      }
    )
    .then(data => dispatch({type: 'update-content', payload: data}))
  };
  return asynchAction;
}
