<script lang="ts" setup>
import { ref } from 'vue';

const todos = ref([
	{
		title: 'React.js',
		desc: 'this is flexible and javascdd',
		createdAt: '2024/10/2 10:10:10',
	},
	{
		title: 'Vue.js',
		desc: 'Progressive Javascript Framework for building User Interfaces.',
		createdAt: '2024/10/2 10:10:10',
	},
]);
const newtodo = ref({ title: '', desc: '', createdAt: '' });

function addTodo() {
	let now = new Date();
	if (newtodo.value.title === '' || newtodo.value.desc === '')
		return alert('All field is required!');
	todos.value.push({
		title: newtodo.value.title,
		desc: newtodo.value.desc,
		createdAt: `${now.getFullYear().toString()}/${(now.getMonth() + 1).toString()}/${now.getDate().toString()} ${now.getHours().toString()}:${now.getMinutes().toString()}:${now.getSeconds().toString()}`
	});
	newtodo.value = { title: '', desc: '', createdAt: '' };
}

function removeTodo(index: Number) {
	todos.value = [...todos.value.filter((todo, id) => id !== index)];
}
</script>
<template>
	<div class="container mx-auto py-10 px-5">
		<h1 class="text-5xl text-center my-4">To Do List</h1>
		<form @submit.prevent="addTodo">
			<v-text-field v-model="newtodo.title" :counter="10" label="Enter Title!" />
			<v-text-field v-model="newtodo.desc" :counter="7" label="Enter Description!" />
			<v-btn class="me-4 w-full" size="large" type="submit">Add Plan</v-btn>
		</form>
		<div>
			<h2 class="text-2xl my-4">Plans :</h2>
			<v-list v-if="todos.length > 0" class="py-8 px-4" color="primary" lines="two">
				<v-list-item v-for="({ title, desc, createdAt }, i) in todos" :key="i" :title="title" :subtitle="desc"
					class="shadow-md rounded-md">
					<template v-slot:append>
						<v-btn size="x-small" class="mr-2">{{ createdAt }} </v-btn>
						<v-btn @click="removeTodo(i)" icon="mdi-pencil" class="mr-2"></v-btn>
						<v-btn @click="removeTodo(i)" icon="mdi-close"></v-btn>
					</template>
				</v-list-item>
			</v-list>
			<v-list v-else class="py-16">
				<h2 class="text-2xl text-center">Not Found Plan!</h2>
			</v-list>
		</div>
	</div>
</template>
