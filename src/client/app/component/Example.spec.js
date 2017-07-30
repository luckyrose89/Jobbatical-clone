import React from 'react';
import { mount } from 'enzyme';

import { Example } from './Example';

describe('Example', () => {
  it('should work', () => {
    const props = {
      onDec: jest.fn(),
      onInc: jest.fn(),
      num: 42,
    };
    expect(mount(<Example {...props} />).find('h1').length).toBe(1);
  });
});
