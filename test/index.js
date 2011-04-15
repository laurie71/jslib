require('./runner').run(
    [ require('./test-clone').tests
    , require('./test-mixin').tests
    , require('./test-inherit').tests
    , require('./test-typeOf').tests
    ]
);