import React from 'react';

class SimpleNameDisplay extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {
      nameValue,
    } = this.props;

    return(
      <div>
        Simple Name Display: {nameValue}
      </div>
    );
  }
}

export default SimpleNameDisplay;
