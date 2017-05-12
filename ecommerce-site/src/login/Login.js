import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Login.actions';

class Login extends React.Component {
  render() {
    return(
      <div>
      <form>
        <label>Username</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'loginUsername')} type="text" className="form-element" value={this.props.loginUsername}/>
        <label>Password</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'loginPassword')} type="password" className="form-element" value={this.props.loginPassword}/>
      </form>
      <button onClick={() => this.props.submitForm(this.props.loginUsername, this.props.loginPassword)}>Login</button>
      </div>
    );
  }
}

const LoginContainer = ReactRedux.connect(
  state => state.login,
  actions
)(Login);

export default LoginContainer;
