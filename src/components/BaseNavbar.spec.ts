import BaseNavbar from './BaseNavbar.vue';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';

describe('BaseNavbar', () => {
	it('renders the message prop', () => {
		const { getByTestId } = render(BaseNavbar);
		expect(getByTestId('button')).toBeTruthy();
	});
});
