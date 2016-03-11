var url = require('url')
var http = require('http');
var https = require('https')
var e = require('../Exceptions');

var HeadRequest = function (http_url, options) {
	options = options || {};

	this.url = url.parse(http_url, false, true);

	if ( this.url.port ) {
		this.port = this.url.port
	}	else if ( this.url.protocol ) {
		if ( this.url.protocol === 'https:' ) {
			this.port = 443
		} else {
			this.port = 80
		}
	} else {
		// no protocol and no port found.  we're S.O.L bois.
	}

	// console.log('Url:', this.url)

	// console.log('this.port:', this.port)

	this.headers = options.headers || {};
};

var _execute = function (callback) {
	var self = this;
	this.callback = callback;
	http.globalAgent.maxSockets = 200;
	http.Agent.defaultMaxSockets = 200;
	var onError = self.onError.bind(self);

	var onHttpHeadRequestComplete = (response) => {

		// console.log('onhead complete:', response.headers)

		var fileSize = Number(response.headers['content-length']);
		response.destroy();

		if (isNaN(fileSize)) {
			self.callback(e(1008, self.url.host));
			return;
		}

		var result = {
			fileSize: fileSize,
			headers: response.headers,
			port: self.port,
		};

		// console.log('fileSize:', fileSize)
		self.callback(null, result);
	}

	requestOptions = {
		hostname: self.url.hostname,
		path: self.url.path,
		method: 'HEAD',
		port: self.port,
		headers: self.headers
	};

	// console.log('headers:', self.headers)
	// console.log('requestOptions', requestOptions)

	var htt_protocol = self.port == 443 ? https : http

	htt_protocol.request(requestOptions, onHttpHeadRequestComplete)
		.on('error', onError)
		.end();
};

HeadRequest.prototype.execute = _execute;
HeadRequest.prototype.onError = function (err) {
	console.log(err)
	this.callback(e(1004, this.url.host));
};

module.exports = HeadRequest;