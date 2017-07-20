exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.e2e-spec.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    plugins: [{
        path: './index.js',
        failMessage: 'Oh noes {totalFailed} tests failed',
        token: 'xoxp-215629443668-98-2602434-015a3473ef49347e0d0',
        channel: 'general'
    }],
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare() {
        let StaticServer = require('static-server');
        new StaticServer({rootPath: './', port: 4200}).start();
    }
};