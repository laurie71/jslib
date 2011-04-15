var u = require('util');
var utils = module.exports;

utils.inspect = u.inspect;

utils.debug = u.debug;
utils.trace = console.trace;
utils.error = console.error;
utils.warn  = console.warn;
utils.info  = console.info;

utils.clone   = require('./lib/clone');
utils.inherit = require('./lib/inherit');
utils.mixin   = require('./lib/mixin');
utils.typeOf  = require('./lib/typeOf');
