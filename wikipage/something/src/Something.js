import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Something.actions';

class Something extends React.Component{
  render() {
    return(
      <div>
        Hello
        <button onClick={() => this.props.doAThing()}>DO IT!</button>
        {this.props.content}
      </div>
    );
  }
}

const SomethingContainer = ReactRedux.connect(
  state => state.something,
  actions
)(Something);

export default SomethingContainer;
