import { mount } from '@vue/test-utils';
import Tabs from './tabs.vue';
import store, { mutations } from '../store';

describe('Tabs component', () => {
  let component;

  beforeEach(() => {
    component = mount(Tabs, { store });
  });

  it('should change to the Employee tab when clicked', () => {
    mutations.changeTab(store.state, 'Employer');
    const employeeTab = component.find('#Employee');

    employeeTab.trigger('click');

    expect(employeeTab.is('.active')).toBe(true);
    expect(store.state.currentTab).toBe('Employee');
  });

  it('should change to the Employer tab when clicked', () => {
    mutations.changeTab(store.state, 'Employee');
    const employerTab = component.find('#Employer');

    employerTab.trigger('click');

    expect(employerTab.is('.active')).toBe(true);
    expect(store.state.currentTab).toBe('Employer');
  });
});
