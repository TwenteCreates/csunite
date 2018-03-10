<template>
	<div>
		<div class="headline text-xs-center pa-5">Active: {{ activeElt }}</div>
		<v-bottom-nav absolute :value="true" :active.sync="activeElt" color="transparent">
			<v-btn flat color="teal" value="recent">
				<span>Recent</span>
				<v-icon>history</v-icon>
			</v-btn>
			<v-btn flat color="teal" value="favorites">
				<span>Favorites</span>
				<v-icon>favorite</v-icon>
			</v-btn>
			<v-btn flat color="teal" value="nearby">
				<span>Nearby</span>
				<v-icon>place</v-icon>
			</v-btn>
		</v-bottom-nav>
		</div>
</template>

<script>
	export default {
		data () {
			return {
				activeElt: "recent"
			}
		}
	}
</script>