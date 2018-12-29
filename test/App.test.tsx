import React from 'react';
import { shallow } from 'enzyme';
import App from './../src/App';

describe('App', () => {
  describe('Render', () => {
    it('should render an App Component', () => {
      const wrapper = shallow(<App />);
      const appComponent = wrapper.exists();
      expect(appComponent).toBe(true);
    });
  });
});
