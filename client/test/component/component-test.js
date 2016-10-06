import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Test from '../../components/Test.js';
import fetch from 'node-fetch';

describe("component/test", function() {
  it('should render children  when passed in', () => {
    const wrapper = shallow(<Test />);
    expect(wrapper.contains(<h1 >Hello</h1>)).to.equal(true);
    expect(wrapper.contains(<h2 >Hello</h2>)).to.equal(true);
  });
});
