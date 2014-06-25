module.exports = command = ->
  greet = require("../lib/index.js")
  parseArgs = require("minimist")
  argv = parseArgs(process.argv.slice(2))
  console.log greet(argv._[0], argv.drunk)
  return