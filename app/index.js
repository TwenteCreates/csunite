import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import routes from "./modules/router.js";
import Nav from "./components/Nav.vue";
import css from "./assets/app.scss";
import * as VueGoogleMaps from "vue2-google-maps";
import "babel-polyfill";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

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

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		const position = savedPosition || {
			x: 0,
			y: 0
		}
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ x: 0, y: 0 });
			}, 200);
		})
	}
});

// App
const app = new Vue({
	el: "#app",
	data: {
	},
	router,
	mounted() {
	},
	methods: {
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