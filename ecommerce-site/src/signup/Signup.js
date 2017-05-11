import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Signup.actions';

class Signup extends React.Component {
  render() {
    return(
      <form>
        <input onChange={(event) => this.props.changeState(event.target.value, 'username')} type="text" value={this.props.username}/>
        <input onChange={(event) => this.props.changeState(event.target.value, 'email')} type="text" value={this.props.email}/>
        <input onChange={(event) => this.props.changeState(event.target.value, 'first')} type="text" value={this.props.first}/>
        <input onChange={(event) => this.props.changeState(event.target.value, 'last')} type="text" value={this.props.last}/>
        <input onChange={(event) => this.props.changeState(event.target.value, 'password')} type="password" value={this.props.password}/>
        <input onChange={(event) => this.props.changeState(event.target.value, 'confirm')} type="password" value={this.props.confirm}/>
        <button onClick={() => this.props.submitForm()}> Submit </button>
      </form>
    );
  }
}

const SignupContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(Signup);

export default SignupContainer;
