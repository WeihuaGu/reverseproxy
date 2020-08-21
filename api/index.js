var request = require('request');
module.exports = (req, res) => {
	var url=process.env.target + req.url;
	req.pipe(request(url)).pipe(res);

}

