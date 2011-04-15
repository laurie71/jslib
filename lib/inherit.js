var mixin = require('./mixin');

module.exports = function inherit(sb, sp, proto) {
    if (typeof(sp) !== 'function') {
        proto = sp; 
        sp = sb;
        sb = ('constructor' in proto && proto.constructor !== Object.prototype.constructor)
            ? proto.constructor : function() { sp.apply(this, arguments); };
    }
    
    var F = function() {};
    F.prototype = sp.prototype;
    sb.prototype = new F();
    if (proto) mixin(sb.prototype, proto);
    
    sb.prototype.constructor = sb;
    sb.prototype.super_ = sb.super_ = sp.prototype;
    
    if (sp.prototype.constructor == Object.prototype.constructor) {
        sp.prototype.constructor = sp;
    }
    
    return sb;
};

