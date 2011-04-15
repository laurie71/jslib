/**
 * @param {Object} target
 * @param {Object} source1,source2,...
 * @return <code>target</code>
 */
module.exports = function mixin(target) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while (sources.length) {
        var source = sources.shift();
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

