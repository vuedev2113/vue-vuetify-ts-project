<template>
	<v-app-bar density="compact" color="primary" flat class="text-white px-10">
		<v-btn data-testid="button">
			<router-link to="/"> Home </router-link>
		</v-btn>
		<v-btn>
			<router-link to="/about"> About </router-link>
		</v-btn>
	</v-app-bar>
</template>
