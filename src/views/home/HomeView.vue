<template>
	<TechStack :tech-list="techList" />
</template>

<script lang="ts" setup>
const techList: Array<{
	name: string;
	path: string | null;
}> = [
	{ name: 'ESLint', path: '/eslint.svg' },
	{ name: 'Prettier', path: '/prettier.svg' },
	{ name: 'Tailwind CSS', path: '/tailwind.svg' },
	{ name: 'SASS', path: '/sass.svg' },
	{ name: 'Vitest', path: '/vitest.svg' },
	{ name: 'Testing Library', path: '/testing-library.svg' },
	{ name: 'Pinia', path: '/pinia.svg' },
	{ name: 'Vue Query', path: '/vue-query.svg' },
	// { name: 'Husky 🐶', path: null },
	// { name: 'Vue Router', path: null },
	// { name: 'Auto imports: Components', path: null },
	// {
	// 	name: 'Auto imports: API from Vitest, Pinia, Vue and Vue Router',
	// 	path: null,
	// },
];
</script>
