var assert = require('assert');
var typeOf = require('jslib').typeOf;

exports.tests = {
    'typeOf(1) is "number"':    function() { assert.equal(typeOf(1), "number"); },
    'typeOf(1.0) is "number"':  function() { assert.equal(typeOf(1.0), "number"); },
    'typeOf("x") is "string"':  function() { assert.equal(typeOf("x"), "string"); },
    'typeOf({}) is "object"':   function() { assert.equal(typeOf({}), "object"); },
    'typeOf([]) is "array"':    function() { assert.equal(typeOf([]), "array"); },
    'typeOf(null) is "null"':   function() { assert.equal(typeOf(null), "null"); },
    'typeOf(undef) is "undef"': function() { assert.equal(typeOf(undefined), "undefined"); },
    
};
