const Logger = require('./singleton');

Logger.setConfig({appName:  'Jeff App'})

Logger.log('Logger singleton pattern', 'param 1','param 2')
