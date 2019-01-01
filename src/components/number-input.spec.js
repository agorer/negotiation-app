import { mount } from '@vue/test-utils';
import NumberInput from './number-input.vue';
import store from '../store';
import initialStoreState from '../../tests/fixtures';

describe('Number input component', () => {
  let component;
  let textInput;
  let submitButton;

  beforeEach(() => {
    store.replaceState(initialStoreState());
    component = mount(NumberInput, { store });
    textInput = component.find('.text-input');
    submitButton = component.find('.submit-button');
  });

  it('should not allow to submit when empty', () => {
    textInput.element.value = '';
    textInput.trigger('input');

    expect(submitButton.is('[disabled]')).toBe(true);
  });

  it('should not allow to submit when amount is not a number', () => {
    textInput.element.value = 'abcd';
    textInput.trigger('input');

    expect(submitButton.is('[disabled]')).toBe(true);
  });

  it('should not allow to submit when amount is a negative number', () => {
    textInput.element.value = '-100';
    textInput.trigger('input');

    expect(submitButton.is('[disabled]')).toBe(true);
  });

  it('should submit the number when the button is clicked', () => {
    component.setProps({ amountId: 'amount-id' });

    textInput.element.value = '100';
    textInput.trigger('input');
    submitButton.trigger('click');

    expect(store.state.amounts['amount-id']).toBe(100);
  });

  it('should hide the amount once is submitted', () => {
    component.setProps({ amountId: 'amount-id' });

    textInput.element.value = '100';
    textInput.trigger('input');
    submitButton.trigger('click');

    expect(textInput.isVisible()).toBe(false);
    expect(submitButton.isVisible()).toBe(false);
  });

  it('should show the placeholder passed as a parameter', () => {
    component.setProps({ placeholder: 'enter maximum offer' });

    expect(textInput.attributes().placeholder).toBe('enter maximum offer');
  });
});
