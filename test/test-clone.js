var assert = require('assert');
var clone = require('jslib').clone;
// var clone = require('jslib/lib/clone');

function assertClone(obj) {
    assert.deepEqual(clone(obj), obj);
}

exports.tests = {
    'clone simple string':  function() { assertClone('string'); },
    'clone simple bool':    function() { assertClone(true); },
    'clone simple number':  function() { assertClone(1.5); },
    
    'clone empty array':    function() { assertClone([]); },
    'clone filled array':   function() { assertClone([1, 'a', true]); },
    'clone nested array':   function() { assertClone([1, [2, [3]]]); },
    
    'clone empty object':   function() { assertClone({}); },
    'clone filled object':  function() { assertClone({a:1, b:true}); },
    'clone nested object':  function() { assertClone({a: {b: {c:1}}}); },
    
    'clone complex object': function() { assertClone({
            string: 'string',
            array: ['an', 'array', { with: 'an object'}],
            nested: {
                object: 'is', nested: ['more deeply'], child: {
                    woot: 'so far'
                }
            }
        }); 
    },
    
    'clone getter':         function() {
        // FIXME: no support yet for getters/setters
        
        // var obj = { base: 1 }, cloned; 
        // Object.defineProperty(obj, 'getter', { enumerable: true, get: function() { return this.base*2; } }); 
        // cloned = clone(obj);
        // assertClone(obj);
        // 
        // assert.equal(cloned.getter, 2);
        // obj.base = 2; assert.equal(obj.getter, 4); // sanity check
        // cloned.base = 2; assert.equal(cloned.getter, 4);
    }
};

if (! module.parent) {
    require('./runner').run(exports.tests);
}