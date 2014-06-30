#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2));
console.dir(args)
	var serveStatic = require('serve-static');
	var path = path || process.cwd()
	var port = port || 4000;
require('mini-harp')(args.path,args.port);