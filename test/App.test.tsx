import * as React from 'react';
import { shallow } from 'enzyme';
import * as App from '../src/App';

describe('App', () => {
  describe('Render', () => {
    it('it should render an App component', () => {
      const wrapper = shallow(<App />);
      const app = wrapper.exists();
      expect(app).toBe(true);
    });
  });
});
