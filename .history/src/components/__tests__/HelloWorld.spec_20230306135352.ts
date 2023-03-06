import { describe, it, expect, beforeEach, vi } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  let mockedIncrement = 100;

  beforeEach(() => {
    // you can access variables inside a factory
    vi.doMock('./increment.js', () => ({ increment: () => ++mockedIncrement }));
  });

  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
