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
			<v-btn to="/profile" flat color="teal" value="profile">
				<span>Profile</span>
				<v-icon>face</v-icon>
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