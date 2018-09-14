import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import { Provider } from 'react-redux';
import Search from '../../../components/Search/Search.component';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('The search component', () => {

  beforeEach(() => {
    const mockFetchResult = {
      json: () => Promise.resolve([71, 23, 33, 11, 2097])
    };

    fetch = () => {
      return Promise.resolve(mockFetchResult);
    }
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store = {store}>
        <Search />
      </Provider>
      , div);

  });

  it('should correctly render an unordered list of the top 5 stories IDs once this data is retrieved', async () => {
    const wrapper = await mount(<Provider store = {store}><Search/></Provider>);
    await wrapper.instance();
    wrapper.update();

    expect(wrapper.find('li').length).toBe(5);
    expect(wrapper.find('li').at(0).text()).toBe('71');
    expect(wrapper.find('li').at(1).text()).toBe('23');
    expect(wrapper.find('li').at(2).text()).toBe('33');
    expect(wrapper.find('li').at(3).text()).toBe('11');
    expect(wrapper.find('li').at(4).text()).toBe('2097');
  });
});

