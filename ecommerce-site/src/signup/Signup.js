import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Signup.actions';

class Signup extends React.Component {
  render() {
    return(
      <div>
      <form>
        <label>Username</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'username')} type="text" className="form-element" value={this.props.username}/>
        <label>Email</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'email')} type="text" className="form-element" value={this.props.email}/>
        <label>First Name</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'first')} type="text" className="form-element" value={this.props.first}/>
        <label>Last Name</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'last')} type="text" className="form-element" value={this.props.last}/>
        <label>Password</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'password')} type="password" className="form-element" value={this.props.password}/>
        <label>Confrim Password</label>
        <input onChange={(event) => this.props.changeState(event.target.value, 'confirm')} type="password" className="form-element" value={this.props.confirm}/>

      </form>
      {this.props.password !== '' && this.props.confirm !== '' ? (this.props.password === this.props.confirm && this.props.password !== '' ?
        <button onClick={() => this.props.submitForm(this.props.username, this.props.email, this.props.first, this.props.last, this.props.password)}> Submit </button> : <p>Passwords do not match!</p>): null}

      </div>
    );
  }
}


const SignupContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(Signup);

export default SignupContainer;
