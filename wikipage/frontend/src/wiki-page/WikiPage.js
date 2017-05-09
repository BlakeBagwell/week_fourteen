import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.action';

class WikiPage extends React.Component {
  componentDidMount() {
    this.props.fetchPage(this.props.params.title);
  }
  render(){
    let title = this.props.params.title;
    return(
      <div>
      {this.props.content}<br/>
        WikiPage
        <button onClick={() => this.props.toggleEdit}>Edit</button>
      </div>
    );
  }
}


const WikiPageContainer = ReactRedux.connect(
  state => state.wiki,
  actions
)(WikiPage);

export default WikiPageContainer;
