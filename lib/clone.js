var typeOf = require('./typeOf');

/**
 * Create a deep copy of <code>source</code>.
 * TODO DOCS more detail
 * To create a shallow copy, use mixin({}, source)...

 * @param {any} source
 * @return ...
 */
module.exports = function clone(source) {
    var target, type = typeOf(source);
    switch (type) {
        case 'array':
            target = [];
            for (var i = 0, ilen = source.length; i < ilen; i++) {
                target[i] = clone(source[i]);
            }
            break;
        case 'object':
            target = {};
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    target[prop] = clone(source[prop]);
                }
            }
            break;
        default:
            target = source;
    }
    return target;
};
