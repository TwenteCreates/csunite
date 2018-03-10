<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>Community</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>search</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>more_vert</v-icon>
			</v-btn>
		</v-toolbar>
		 <v-container>
			<v-card color="blue-grey darken-2" class="white--text">
				<v-card-title primary-title>
					<div class="headline mb-2" style="margin-top: -10px">Welcome to the CSU community!</div>
					<div>Talk to experienced cleaning professionals, find people in your community, and connect with coworkers, with complete data privacy.</div>
				</v-card-title>
			</v-card>
			<div class="mt-4" style="margin-bottom: 112px">
				<div v-for="message in messages" :key="message.id">
					<div class="message mine" v-if="message.from === 'me'">
						<span>{{message.text}}</span>
					</diV>
					<div class="message" v-else>
						<v-avatar size="36px" slot="activator" style="float: left">
							<img :src="'https://tse2.mm.bing.net/th?q=' + encodeURIComponent(message.from) + '&w=30&h=30&p=0&dpr=2&adlt=moderate&c=1'" alt="">
						</v-avatar>
						<div style="float: right; width: calc(100% - 50px)">
							<span :style="message.from === 'bot icon flat' ? 'background: #455B64; color: #fff' : ''"><strong v-if="message.from === 'bot icon flat'">Announcement: </strong>{{message.text}}</span>
						</div>
					</diV>
				</div>
			</div>
		</v-container>
		<div class="writer">
			<v-text-field v-model="message" placeholder="Enter your message..." style="color: #fff; margin-top: -5px" @keyup.enter.prevent="sendMessage" required />
		</div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				message: "",
				messages: [
					{
						id: 1,
						text: "Hey! Does anyone know what time our shifts start tomorrow?",
						from: "john"
					},
					{
						id: 2,
						text: "I'm not sure, perhaps John would know.",
						from: "amanda"
					},
					{
						id: 3,
						text: "8:40 am, if I'm not wrong",
						from: "me"
					},
					{
						id: 4,
						text: "Great, thanks!",
						from: "john"
					},
					{
						id: 5,
						text: "Due to heavy snow, tomorrow will be off for all employees.",
						from: "bot icon flat"
					},
					{
						id: 6,
						text: "Oh yaay!",
						from: "amanda"
					},
				]
			}
		},
		methods: {
			sendMessage() {
				this.messages.push({
					id: Math.random()*1000,
					text: this.message,
					from: "me"
				});
				this.message = "";
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message span {
		padding: 10px 15px;
		display: inline-block;
		border-radius: 30px;
		background: #ddd;
		margin-bottom: 10px;
	}
	.message::after {
		content: "";
		display: block;
		clear: both;
	}
	.message.mine span {
		float: right;
		background-color: #009688;
		color: #fff;
	}
	.writer {
		position: fixed;
		bottom: 56px;
		left: 0; right: 0;
		height: 56px;
		background-color: #009688;
		padding: 0 20px;
	}
</style>