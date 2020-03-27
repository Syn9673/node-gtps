const service = require("restana")();
const yaml = require("yaml");
const { readFileSync } = require("fs");

const config = yaml.parse(readFileSync(`${__dirname}/config.yml`, 'utf-8'));

function CreateWebServer() {
	service.post("*", function(req, res) {
		res.send(`server|127.0.0.1\nport|${config.port}\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|127.0.0.1\nbeta_port|${config.port}\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`)
	});

	service.start(config.web.port)
	.then(() => console.log(`Growtopia webserver started at port ${config.web.port}`))
}

if (!config.web.autoStart) {
	console.log("Could not start file, autoStart is enabled. Please disable it to run from this file.");
	CreateWebServer();
}

module.exports.exec = CreateWebServer;