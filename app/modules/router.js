import Home from "../components/pages/Home.vue";
import Requests from "../components/pages/Requests.vue";
import Community from "../components/pages/Community.vue";
import Inclusion from "../components/pages/Inclusion.vue";
import Error404 from "../components/pages/Error404.vue";
import Profile from "../components/pages/Profile.vue";
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
        path: "/profile",
        component: Profile,
        meta: {
            title: "Profile"
        }
    },
	{
		path: "/inclusion",
		component: Inclusion,
		meta: {
			title: "Inclusion"
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