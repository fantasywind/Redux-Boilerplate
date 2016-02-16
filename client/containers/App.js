import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    padding: '0 0 0 200px',
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  state => ({

  }),
)(App);;
