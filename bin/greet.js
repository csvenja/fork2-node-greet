#!/usr/bin/env node
var greet = require("../index.js");
var parseArgs = require('minimist');
var argv = parseArgs(process.argv.slice(2));

console.log(greet(argv._[0], argv.drunk));