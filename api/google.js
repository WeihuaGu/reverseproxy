var request = require('request');
module.exports = (req, res) => {
	var url = 'https://www.google.com/' + req.url;
	req.pipe(request(url)).pipe(res);

}

