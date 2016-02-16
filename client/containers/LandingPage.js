import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

const styles = {
  wrapper: {

  },
};

class LandingPage extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <h1>Starbucks Site</h1>
      </div>
    );
  }
}

export default connect(
  state => ({

  }),
)(Radium(LandingPage));
