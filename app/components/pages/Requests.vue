<template>
	<div>
		<!-- <gmap-map v-bind:options="mapStyle" :center="{lat: 47.609526517418864, lng: -122.13}" :zoom="13" map-type-id="roadmap" class="bg-map" /> -->
		<v-card>
			<v-card-media src="https://via.placeholder.com/400x200" height="150px">
			</v-card-media>
			<v-card-title primary-title>
				<div>
					<h3 class="mb-3">
						Hessel Bosma <span color="orange">★★★★☆</span>
					</h3>
					<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
				</div>
			</v-card-title>
			<v-card-actions>
				<v-btn flat color="grey"><v-icon class="mr-2">close</v-icon>Decline</v-btn>
				<v-btn flat color="orange"><v-icon class="mr-2">check</v-icon>Accept</v-btn>
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
				form: {
					email: "",
					name: "",
					company: "",
					message: "",
				},
				show: true,
				sent: false,
				error: null
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