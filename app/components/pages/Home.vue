<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>Welcome</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>search</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>more_vert</v-icon>
			</v-btn>
		</v-toolbar>
		<v-container grid-list-md text-xs-center class="mt-5">
			<v-layout row wrap>
				<v-flex xs6>
					<v-avatar size="75" class="orange">
						<v-icon x-large light>security</v-icon>
					</v-avatar>
					<p class="mt-3">Level 5</p>
				</v-flex>
				<v-flex xs6>
					<v-avatar size="75" class="indigo">
						<v-icon x-large light>star</v-icon>
					</v-avatar>
					<p class="mt-3">4.3/5</p>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<style scoped>

</style>