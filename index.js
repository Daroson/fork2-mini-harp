module.exports = function(path,port) {

	var app = require('connect')();
	var serveStatic = require('serve-static');
	var path = path || process.cwd()
	var port = port || 4000

	app.use(function (req, res, next) {
	  if (req.url === '/current-time') {
	      res.end( (new Date()).toISOString() );
	  } else {
	      next();
	  }
	})
	.use(serveStatic(path))
	.listen(port)
	
	console.log('serving file at '+path);
	console.log("Starting http server on http://localhost:"+port);	
};

