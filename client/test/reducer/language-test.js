import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import * as gitAPI from '../../reducers/gitAPI';

describe('typeof gitAPI', () => {
  it('=== Object ', () => {
    expect(typeof gitAPI).to.equal('object');
  });
});
