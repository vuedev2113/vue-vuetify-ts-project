import TechStack from './TechStack.vue';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';

interface Tech {
	name: string;
	path: string | null;
}

describe('TechStack', () => {
	it('renders the message prop', () => {
		const { getByText } = render(TechStack, {
			props: {
				techList: [
					{
						name: 'test',
						path: null,
					},
				] as Tech[],
			},
		});
		expect(getByText('test')).toBeTruthy();
	});
});
