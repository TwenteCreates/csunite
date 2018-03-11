const OfflinePlugin = require("offline-plugin");

module.exports = options => ({
	entry: "./index.js",
	homepage: "/csu/",
	extendWebpack(config) {
		if (options.mode === "production") {
			config.plugin("offline").use(OfflinePlugin)
		}
	},
	html: {
		template: "./layout.ejs"
	}
})