var assert = require('assert');
var inherit = require('jslib').inherit;

exports.tests = {
    'smoketest': function() {
        var Base = function() { this.basector = true; };
        Base.prototype.prop1 = 1;
        Base.prototype.fn1 = function() { return 1; };
        
        var Child = function() { this.childctor = true; Base.call(this); }
        inherit(Child, Base, {});
        
        var base = new Base();
        var child = new Child();
        assert.strictEqual(child.prop1, base.prop1);
        assert.strictEqual(child.fn1, base.fn1);
        assert.ok(child.childctor);
        assert.ok(child.basector);
    }
};
