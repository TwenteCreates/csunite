<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>Request</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn color="teal" light @click="dialog = true">
				<v-icon left>check</v-icon>complete
			</v-btn>
		</v-toolbar>
		<v-list two-line>
			<v-list-tile avatar>
				<v-list-tile-avatar>
					<v-avatar class="pink">
						<v-icon light>face</v-icon>
					</v-avatar>
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title>{{response.name}}</v-list-tile-title>
					<v-list-tile-sub-title>Satisfaction: 89%</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-divider :inset="true" style="background: #ddd" />
			<v-list-tile avatar>
				<v-list-tile-avatar>
					<v-avatar class="orange">
						<v-icon light>access_time</v-icon>
					</v-avatar>
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title>{{response.time}}</v-list-tile-title>
					<v-list-tile-sub-title>Clean by</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-divider :inset="true" style="background: #ddd" />
			<v-list-tile avatar>
				<v-list-tile-avatar>
					<v-avatar class="green">
						<v-icon light>map</v-icon>
					</v-avatar>
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title>{{response.distance}}</v-list-tile-title>
					<v-list-tile-sub-title>Distance from you</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-divider :inset="true" style="background: #ddd" />
			<v-list-tile avatar>
				<v-list-tile-avatar>
					<v-avatar class="blue">
						<v-icon light>location_on</v-icon>
					</v-avatar>
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title>{{parseInt(parseInt(response.distance) * 2.23606797749978969640917366873127623)}} mins</v-list-tile-title>
					<v-list-tile-sub-title>Time to destination</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-divider :inset="true" style="background: #ddd" />
			<v-list-tile avatar>
				<v-list-tile-avatar>
					<v-avatar class="blue-grey">
						<v-icon light>my_location</v-icon>
					</v-avatar>
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title>{{response.leaveIn}} mins</v-list-tile-title>
					<v-list-tile-sub-title>Time to leave in</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
		<div class="text-xs-center">
			<v-btn color="red" light @click="cancel">
				<v-icon left>close</v-icon>Cancel response
			</v-btn>
		</div>
		<v-dialog
			fullscreen
			transition="dialog-bottom-transition"
			:overlay="false"
			scrollable
			v-model="dialog"
		>
			<v-card tile style="background: #fff">
				<v-toolbar card dark color="teal">
					<v-btn icon @click.native="dialog = false" dark>
						<v-icon>close</v-icon>
					</v-btn>
					<v-toolbar-title style="color:#fff">Complete</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-toolbar-items>
						<v-btn flat @click.native="complete">
							<v-icon left>save</v-icon>
							Save
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>
				<v-card-text>
					<v-list three-line subheader>
						<v-subheader>Completion Form</v-subheader>
						<v-list-tile avatar>
							<v-list-tile-content>
								<v-list-tile-title>Add an image</v-list-tile-title>
								<v-list-tile-sub-title>To mark this project as completed, click a photo of the room you just cleaned and attach it here:</v-list-tile-sub-title>
							</v-list-tile-content>
						</v-list-tile>
						<VueUploadcare :url.sync="photoUrl" />
					</v-list>
					<v-divider></v-divider>
				</v-card-text>
				<div style="flex: 1 1 auto;" />
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	import router from "../../modules/router";
	import VueUploadcare from "vue-uploadcare";
	window.UPLOADCARE_PUBLIC_KEY = "b84367cf8636092ee2f9";
	export default {
		data: () => {
			return {
				response: {},
				photoUrl: "",
				dialog: false
			}
		},
		components: { VueUploadcare },
		mounted() {
			if (localStorage.getItem("request")) {
				this.response = JSON.parse(localStorage.getItem("request"));
			} else {
				router.push("/requests");
			}
		},
		methods: {
			cancel() {
				let c = confirm("Are you sure you want to cancel your response? This might reduce your rating.");
				if (c) {
					localStorage.removeItem("request");
					this.$root.toast("We've cancelled your response.");
					router.push("/requests");
				}
			},
			complete() {
				localStorage.removeItem("request");
				this.$root.toast("Good job!");
				router.push("/requests");
			}
		}
	}
</script>