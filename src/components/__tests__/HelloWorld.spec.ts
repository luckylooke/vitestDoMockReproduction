import { describe, it, expect, beforeEach, vi } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
import { increment } from '../increment';
console.log('using increment', increment(1));

describe('HelloWorld', () => {
  let mockedIncrement = 100;

  beforeEach(() => {
    // you can access variables inside a factory
    vi.doMock('../increment', () => ({ increment: () => {
      console.log('>>>>>>>>>> doMock called?');
      return ++mockedIncrement;
    }}));
  });

  it('renders properly', async () => {
    await import('../increment')
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
