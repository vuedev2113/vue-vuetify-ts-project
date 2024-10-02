<script lang="ts" setup>
import { ref } from 'vue';

const todos = ref([
	{
		title: 'React',
		desc: 'this is flexible and javascdd',
		createdAt: '2024/10/2 10:10:10',
	},
]);
const newtodo = ref({
	title: '',
	desc: '',
	createdAt: '',
});

function addTodo() {
	if (newtodo.value.title === '' || newtodo.value.desc === '')
		return alert('All field is required!');
	todos.value.push({
		title: newtodo.value.title,
		desc: newtodo.value.desc,
		createdAt:
			new Date().getFullYear().toString() + "/" +
      (new Date().getMonth() + 1).toString() + "/" +
      new Date().getDate().toString() + " " +
      new Date().getHours().toString() + ":" +
      new Date().getMinutes().toString() + ":" +
      new Date().getSeconds().toString(),
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
			<v-text-field
				v-model="newtodo.title"
				:counter="10"
				label="Enter Title!"
			/>
			<v-text-field
				v-model="newtodo.desc"
				:counter="7"
				label="Enter Description!"
			/>
			<v-btn class="me-4 w-full" @click="addTodo">Add Plan</v-btn>
		</form>
		<div>
			<h2 class="text-2xl my-4">Plans :</h2>
			<v-list lines="two">
				<v-list-item
					v-for="({ title, desc, createdAt }, i) in todos"
					:key="i"
					:title="title"
					:subtitle="desc"
				>
					<template v-slot:append>
						<span>{{ createdAt }}</span>
					</template>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>
