import { mount } from '@vue/test-utils';
import Tabs from './tabs.vue';
import store, { mutations } from '../store';
import initialStoreState from '../../tests/fixtures';

describe('Tabs component', () => {
  let component;

  beforeEach(() => {
    store.replaceState(initialStoreState());
    component = mount(Tabs, { store });
  });

  it('should change to the Employee tab when clicked', () => {
    mutations.changeTab(store.state, 'employer');
    const employeeTab = component.find('#employee');

    employeeTab.trigger('click');

    expect(employeeTab.is('.active')).toBe(true);
    expect(store.state.currentTab).toBe('employee');
  });

  it('should change to the Employer tab when clicked', () => {
    mutations.changeTab(store.state, 'employee');
    const employerTab = component.find('#employer');

    employerTab.trigger('click');

    expect(employerTab.is('.active')).toBe(true);
    expect(store.state.currentTab).toBe('employer');
  });
});
