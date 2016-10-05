import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { sampleActionAsync as gitAPIAction } from '../acitons/sampleAction';

class ApiTest extends Component {
  componentWillMount() {
  }
  btnClick = () => (e) => {
    e.preventDefault();
    const { gitAPI } = this.props;
    gitAPI(this.input1.value);
  };

  render() {
    return (
      <div style={style.container}>
        <input style={style.submit} ref={(c) => this.input1 = c} />
        <button onClick={this.btnClick()} />
        <textarea
          style={style.textarea} ref={(c) => this.textarea1 = c} rows="4" cols="50"
          value={this.props.userInfo} />
      </div>
    );
  }
}


const style = {
  container: {
    display: 'flex',
  },
  submit: {
  },
  textarea: {
  },
};


ApiTest.propTypes = {
  gitAPI: T.func,
};

const mapStateToProps = (state) => ({ userInfo: state.gitAPI.userInfo });

export default connect(mapStateToProps, {
  gitAPI: gitAPIAction,
})(radium(ApiTest));
