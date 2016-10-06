import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import * as Language from '../../actions/Language';
import * as sampleAction from '../../actions/sampleAction';

describe('typeof changeLanguage', () => {
  it('=== Object ', () => {
    expect(typeof Language.changeLanguage()).to.equal('object');
  });
});

describe('sampleAction', () => {
  it('action return type === Object ', () => {
    expect(typeof sampleAction.sampleAction()).to.equal('object');
  });
  it('typeof type === sampleAction.Types.CHANGE_USER ', () => {
    expect(sampleAction.sampleAction().type).to.equal(sampleAction.Types.CHANGE_USER);
  });
  it('typeof userInfo === String ', () => {
    expect(typeof sampleAction.sampleAction('test').userInfo).to.equal('string');
  });
});

describe('sampleActionAsync', () => {
  it('action return type === function ', () => {
    expect(typeof sampleAction.sampleActionAsync()).to.equal('function');
  });
});
