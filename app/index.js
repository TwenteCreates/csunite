import Vue from "vue";
import Vuetify from "vuetify";
import Toasted from "vue-toasted";
import Nav from "./components/Nav.vue";
import css from "./assets/app.scss";
import * as VueGoogleMaps from "vue2-google-maps";
import "babel-polyfill";
import router from "./modules/router";
import "vuetify/dist/vuetify.min.css";
import {HeartRating} from 'vue-rate-it';

Vue.component('heart-rating', HeartRating);
Vue.use(Vuetify);
Vue.use(Toasted);

// Progressive Web App support
if (process.env.NODE_ENV === "production") {
	require("./modules/pwa");
}

Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyCuiZevIb1G87KAoLRSECEdWNBQ06JCMjU",
		libraries: "places"
	}
});

import "@oswaldlabs/agastya";
window.a11ySettings = { token: "5rlsghx", bottom: 75 };

// App
const app = new Vue({
	el: "#app",
	data: {
	},
	router,
	mounted() {
	},
	methods: {
		toast(text) {
			this.$toasted.show(text, {
				theme: "primary",
				position: "top-center",
				duration: 3000
			});
		}
	},
	render() {
		return <div>
			<Nav />
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</div>
	}
});