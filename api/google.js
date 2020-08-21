var request = require('request');
module.exports = (req, res) => {
	var url = 'https://www.google.com/' + req.url;
	res.status(200).send(request(url));

}

