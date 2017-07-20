let slack = require('./lib/slack');

const PLUGIN_NAME = 'Protractor-slack-plugin';

let config = {
    failMessage: '{totalFailed} Protractor tests have failed!'
};

let failed = [];

class ProtractorSlackPlugin {

    onPrepare() {
        if (!this.config.token || this.config.token.length === 0) {
            throw new Error(`${PLUGIN_NAME}: Please provide a slack token`);
        }

        if (!this.config.channel || this.config.channel.length === 0) {
            throw new Error(`${PLUGIN_NAME}: Please provide a slack channel`);
        }

        config = Object.assign(config, this.config);
    }

    postTest(passed, {name}) {
        if (passed) {
            return;
        }

        failed.push({name});
    }

    teardown() {
        if (failed.length === 0) {
            return;
        }

        let message = config.failMessage.replace('{totalFailed}', `${failed.length}`);
        return slack.postMessage(this.config.token, this.config.channel, message);
    }
}

module.exports = new ProtractorSlackPlugin();