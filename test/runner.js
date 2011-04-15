exports.run = function(tests) {
    if (! tests) return;
    if (! Array.isArray(tests)) {
        tests = [tests];
    }
    
    var total = 0, errors = 0, fails = 0;
    tests.forEach(function(suite) {
        Object.keys(suite).forEach(function(test) {
            try {
                ++total;
                suite[test]();
            } catch (e) {
                var message = 'ERROR: ['+test+']: ';

                if (e.name === 'AssertionError') {
                    message += 'expected '+e.expected;
                    message += '; actual '+e.actual;
                    message += ' ('+e.operator+')';
                    ++fails;
                } else {
                    message += e.message || e.stack;
                    ++errors;
                }
                console.error(message);
                console.error(e.stack);
            }
        });
    })

    console.log('%d tests run; %d errors, %d failures', total, errors, fails);
}
