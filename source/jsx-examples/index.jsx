import React from 'react';

export default class Index extends React.Component {
  constructor() {
    super();
    this.props.setLayout('page');
  }
  render() {
    return (
      <h1>Hello World.</h1>
    );
  }
}
