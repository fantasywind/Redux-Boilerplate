import React from 'react';

const Test = (props) => {
  // const { t } = props;
  return (
    <div className="testClass">
      <h1 >Hello</h1>
      <h2 >Hello</h2>
    </div>
  );
};

Test.propTypes = {
  name: React.PropTypes.string,
};

export default Test;
