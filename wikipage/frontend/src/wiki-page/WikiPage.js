import React from 'react';

const WikiPage = () =>
  <div>
    WikiPage
  </div>;

  const WikiPageContainer = ReactRedux.connect(
    state => state.wiki,
    actions
  )(WikiPage);

export default WikiPageContainer;
