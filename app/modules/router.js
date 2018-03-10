import Home from "../components/pages/Home.vue";
import Requests from "../components/pages/Requests.vue";
import Community from "../components/pages/Community.vue";
import Error404 from "../components/pages/Error404.vue";
const routes = [
	{
		path: "/",
		component: Home,
		meta: {
			title: "Learn"
		}
	},
	{
		path: "/requests",
		component: Requests,
		meta: {
			title: "Requests"
		}
	},
	{
		path: "/community",
		component: Community,
		meta: {
			title: "Community"
		}
	},
	{
		path: "*",
		component: Error404,
		meta: {
			title: "404 Error"
		}
	},
];
export default routes;