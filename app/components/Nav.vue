<template>
	<div>
		<v-bottom-nav absolute :value="true" :active.sync="activeElt" color="white">
			<v-btn to="/" flat color="teal" value="learn">
				<span>Learn</span>
				<v-icon>assignment</v-icon>
			</v-btn>
			<v-btn to="/requests" flat color="teal" value="requests">
				<span>Requests</span>
				<v-icon>work</v-icon>
			</v-btn>
			<v-btn to="/community" flat color="teal" value="community">
				<span>Community</span>
				<v-icon>question_answer</v-icon>
			</v-btn>
			<v-btn to="/inclusion" flat color="teal" value="inclusion">
				<span>Inclusion</span>
				<v-icon>accessibility</v-icon>
			</v-btn>
		</v-bottom-nav>
		</div>
</template>

<script>
	export default {
		data () {
			return {
				activeElt: "learn"
			}
		}
	}
</script>