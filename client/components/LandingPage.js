import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';
import LanguageSwitcher from '../containers/LanguageSwitcher';
import ApiTest from '../containers/ApiTest';
const styles = {
  wrapper: {

  },
};


const LandingPage = (props) => {
  const { t } = props;
  return (
    <div style={styles.wrapper}>
      <h1>{t('title')}</h1>
      <LanguageSwitcher />
      <ApiTest />
    </div>
  );
};




LandingPage.propTypes = {
  t: T.func.isRequired
};

export default translate()(radium(LandingPage));
