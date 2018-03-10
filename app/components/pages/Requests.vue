<template>
	<div>
		<gmap-map v-bind:options="mapStyle" :center="{lat: 47.609526517418864, lng: -122.13}" :zoom="13" map-type-id="roadmap" class="bg-map" />
		<v-card style="background: #fff" ref="card">
			<v-card-media src="https://via.placeholder.com/400x200" height="125px">
			</v-card-media>
			<v-card-title primary-title>
				<div>
					<h3 class="mb-3">
						{{request.name}} <span color="orange">★★★★☆</span>
					</h3>
					<div>Clean before 8 pm tonight</div>
					<div>16 mins (7 km) away, leave in 15 minutes</div>
				</div>
			</v-card-title>
			<v-card-actions>
				<v-btn flat color="grey" v-on:click="updateRequest"><v-icon class="mr-2">close</v-icon>Decline</v-btn>
				<v-btn flat color="teal"><v-icon class="mr-2">check</v-icon>Accept for €42</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				mapStyle: {
					mapTypeControl: false,
					zoomControl: false,
					styles: [ { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#d8ebd4" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#cedfe0" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] } ]},
				request: {
					name: "Hessel Bosma"
				},
				show: true,
				sent: false,
				error: null
			}
		},
		methods: {
			updateRequest() {
				this.$refs.card.$el.classList.add("move-enter-active");
				this.$refs.card.$el.classList.add("move-enter");
				setTimeout(() => {
					this.$refs.card.$el.classList.remove("move-enter-active");
					this.$refs.card.$el.classList.remove("move-enter");
					this.$refs.card.$el.classList.add("move-leave-active");
					this.$refs.card.$el.classList.add("move-leave");
					setTimeout(() => {
						this.$refs.card.$el.classList.remove("move-leave-active");
						this.$refs.card.$el.classList.remove("move-leave");
					}, 300);
				}, 300);
			}
		}
	}
</script>

<style lang="scss" scoped>
	#content {
		position: relative;
	}
	.bg-map {
		position: absolute;
		left: 0;
		right: 0;
		top: -3rem;
		bottom: -3rem;
		z-index: 0;
	}
	.high-zindex {
		position: relative;
		z-index: 1;
	}
	.card {
		position: absolute;
		bottom: 76px;
		left: 20px;
		right: 20px;
	}
</style>