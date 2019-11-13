import React, { useState } from 'react';

const NameTag = (props) => {
  const {
    name,
  } = props;

  /* create a piece of state for a counter */
  let [
    count,
    setCount,
  ] = useState(0);

  const incrementCount = () => {
    setCount(count++)
  };

  return (
    <div>
      <span>
        Hello, I'm functional: {count}
      </span>
      <button
        onClick={incrementCount}
      >
        Increment Count
      </button>
    </div>
  );
};

export default NameTag;
