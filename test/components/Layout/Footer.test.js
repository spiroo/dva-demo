import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/components/Layout/Footer';

describe('Layout/Footer.js', () => {
  it('Footer\'s contents should be "Copyright © 2017 HiteVision All Rights Reserved."', () => {
    const commponent = shallow(<Footer />);
    expect(commponent.find('div').length).to.equal(1);
    expect(commponent.find('div').text()).to.equal('Copyright © 2017 HiteVision All Rights Reserved.');
  });
});
