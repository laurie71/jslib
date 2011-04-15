var assert = require('assert');
var mixin = require('jslib').mixin;

exports.tests = {
    'smoketest': function() {
        var src1 = { a:1, b:2 },
            src2 = { c:3, d:4 },
            copy = {};
            
        mixin(copy, src1);
        assert.deepEqual(copy, { a:1, b:2 });
        assert.deepEqual(src1, { a:1, b:2 }); // make sure src1 hasn't changed

        mixin(copy, src2);
        assert.deepEqual(copy, { a:1, b:2, c:3, d:4 });
        assert.deepEqual(src1, { a:1, b:2 }); // make sure src1 hasn't changed
        assert.deepEqual(src2, { c:3, d:4 }); // make sure src2 hasn't changed
        
        mixin(copy, { a:'a' });
        assert.deepEqual(copy, { a:'a', b:2, c:3, d:4 });
        
        var obj = { x:'x', y:'y' };
        mixin(copy, { b: obj});
        assert.strictEqual(obj, copy.b);
    }
};