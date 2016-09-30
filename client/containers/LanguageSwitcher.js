import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { changeLanguage } from '../acitons/Language';

class LanguageSwitcher extends Component {

  componentWillMount() {
    const { language, dispatch } = this.props;
    if (!language) dispatch(changeLanguage('en'));
  }

  handleChange = (language) => (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(changeLanguage(language));
  };


  render() {
    return (
      <div>
        <button onClick={this.handleChange('zh-TW')}>繁體中文</button>
        <button onClick={this.handleChange('zh-CN')}>简体中文</button>
        <button onClick={this.handleChange('en')}>English</button>
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  dispatch: T.func,
  language: T.string,
};

const mapStateToProps = (state) => ({ language: state.Language.language });

export default connect(mapStateToProps)(radium(LanguageSwitcher));
