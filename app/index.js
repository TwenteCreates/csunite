import Vue from "vue";
import Vuetify from "vuetify";
import Nav from "./components/Nav.vue";
import "babel-polyfill";
import "vuetify/dist/vuetify.min.css";
import css from "./assets/app.scss";

Vue.use(Vuetify);

// Progressive Web App support
if (process.env.NODE_ENV === "production") {
	require("./modules/pwa");
}



// App
const app = new Vue({
	el: "#app",
	data: {
	},
	// router,
	mounted() {
	},
	methods: {
	},
	render() {
		return <div>
			<Nav />
		</div>
	}
});