class Logger {
	constructor() {
		this.config = {
			appName: 'Not configured'
		}
	}

	setConfig(config) {
		this.config = config;
	}

	log(message, ...params) {
		console.log(this.config.appName, message, ...params);
	}
}

module.exports = new Logger();

//let configuration = {
	//appName: 'Not configured'
//}

//const LoggerObje = {
	//setConfig(config) {
		//configuration = config
	//},
	//log(message, ...params) {
		//console.log(configuration.appName, message, params);
	//},
//};
