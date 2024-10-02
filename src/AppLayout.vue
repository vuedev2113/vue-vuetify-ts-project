<template>
	<div>
		<v-layout>
			<BaseNavbar />
			<v-main class="h-screen">
				<div class="w-full h-full overflow-y-auto overflow-x-hidden">
					<router-view />
				</div>
			</v-main>
		</v-layout>
	</div>
</template>
