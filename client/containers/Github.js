import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import * as GithubActions from '../actions/Github';

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: props.waiting,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user,
      waiting: nextProps.waiting,
    });
  }

  handleChange = (userName) => (e) => {
    e.preventDefault();
    const { fetchGithubUser } = this.props;
    fetchGithubUser(userName);
  };


  render() {
    const {
      user,
      waiting,
    } = this.state;
    return (
      <div>
        <button onClick={this.handleChange('wjwang')}>FETCH</button>
        <div>
          {
            waiting && <p>Loading...</p>
          }
          {
            user && <pre>{JSON.stringify(user, null, 2)}</pre>
          }
        </div>
      </div>
    );
  }
}

Github.propTypes = {
  fetchGithubUser: T.func,
  user: T.object,
  waiting: T.bool,
};

const mapStateToProps = (state) => ({
  user: state.Github.payload,
  waiting: state.Github.waiting
});

export default connect(mapStateToProps, {
  fetchGithubUser: GithubActions.fetchGithubUser,
})(radium(Github));
