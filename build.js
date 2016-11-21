({
	baseUrl: ".",
	mainConfigFile: "app.js",
	name: "node_modules/almond/almond",
	include: ['js/main'],
    insertRequire: ['js/main'],
	out: "js/main-build.js",
	optimize: "none",
	wrap: true
})
