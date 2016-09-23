import React, {
  PropTypes as T,
} from 'react';
import { StyleRoot } from 'radium';

const styles = {
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    padding: '0 0 0 200px',
  },
};

function App(props) {
  return (
    <StyleRoot style={styles.container}>
      {props.children}
    </StyleRoot>
  );
}

App.propTypes = {
  children: T.node,
};

export default App;
