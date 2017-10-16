import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Layout/Header';

describe('Layout/Header.js', () => {
  it('Website name should be "数字媒体发布系统"', () => {
    const commponent = shallow(<Header />);
    expect(commponent.find('h1').length).to.equal(1);
    expect(commponent.find('h1').text()).to.equal('数字媒体发布系统');
  });
});
