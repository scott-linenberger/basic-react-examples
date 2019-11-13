import React from 'react';


class SimpleComponent extends React.Component {

  constructor(props){
    super(props);

    /* set the initial state */
    /* you will only ever assign state like this in the constructor */
    /* and only to set up the initial state */
    this.state = {
      message: 'Hello, world',
      count: 0,
    };

    /* click handlers have to be bound in classes, this is annoying */
    this.incrementCount = this.incrementCount.bind(this);
  }

  /* lifecycle methods */
  componentDidMount() {

  }

  componentWillUnmount() {
    /* unsub... */
  }

  incrementCount() {
    console.log('Incrementing Count', this.state);
    /* get the current count from state */
    let currentCount = this.state.count;
    currentCount++;

    this.setState({
      count: currentCount,
    });
  }

  render() {
    /* getting props */
    const {
      name,
    } = this.props;

    /* get state */
    const {
      count,
    } = this.state;

    return(
      <div>
        <span>
          Hello, {name}
        </span>
        <button
          onClick={this.incrementCount}
        >
          Increment Count
        </button>
        <div>
          Current Count is: {count}
        </div>
      </div>
    );
  }

};

export default SimpleComponent;