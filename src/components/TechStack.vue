<template>
	<div
		class="w-[75vw] mx-auto h-screen flex flex-col justify-center items-center"
	>
		<div class="grid grid-cols-4 gap-20 p-5 text-center justify-center">
			<div class="mx-auto flex flex-col gap-5 text-sky-300">
				<v-img src="/vite.svg" width="100" height="100" />
				<strong>Vite 4</strong>
			</div>
			<div class="mx-auto flex flex-col gap-5 text-sky-300">
				<v-img src="/vue.svg" width="100" height="100" />
				<strong>Vue 3</strong>
			</div>
			<div class="mx-auto flex flex-col gap-5 text-sky-300">
				<v-img src="/vuetify.svg" width="100" height="100" />
				<strong>Vuetify 3</strong>
			</div>
			<div class="mx-auto flex flex-col gap-5 text-sky-300">
				<v-img src="/typescript.svg" width="100" height="100" />
				<strong>TypeScript</strong>
			</div>
		</div>
		<h2 class="text-center text-indigo-200 text-2xl mt-5">
			Plus the following technologies and features:
		</h2>
		<ul class="flex flex-wrap text-center gap-5 p-10">
			<div
				v-for="{ name, path } of techList"
				:key="name"
				:class="`${
					path ? 'text-cyan-500' : 'text-white'
				} grow p-5 flex flex-col gap-5`"
				elevation="10"
			>
				<v-img
					v-if="path"
					:src="path"
					width="100"
					height="100"
					class="mx-auto"
				/>
				<strong class="text-xl">{{ name }}</strong>
			</div>
		</ul>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	techList: Array<{
		name: string;
		path: string | null;
	}>;
}>();
</script>
