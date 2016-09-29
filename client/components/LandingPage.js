import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';

const styles = {
  wrapper: {

  },
};

const LandingPage = (props) => {
  const { t } = props;
  return (
    <div style={styles.wrapper}>
      <h1>{t('title')}</h1>
    </div>
  );
};


LandingPage.propTypes = {
  t: T.func.isRequired
};

export default translate()(radium(LandingPage));
