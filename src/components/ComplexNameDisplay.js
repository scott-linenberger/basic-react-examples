import React from 'react';

class ComplexNameDisplay extends React.Component {
  constructor(props) {
    super(props);

    /* set the initial state */

    /* bind click handlers */
    this.doWork = this.doWork.bind(this);

    /* constructory stuff */
  }

  doWork() {

  }

  render() {
    const {
      children,
    } = this.props;

    return(
      <div>
        Complex Name Display
        {children}
      </div>
    );
  }
}

export default ComplexNameDisplay;
