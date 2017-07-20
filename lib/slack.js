let WebClient = require('@slack/client').WebClient;

class SlackClient {

    postMessage(token, channel, message) {
        let web = new WebClient(token);

        return new Promise((resolve, reject) => {
            web.chat.postMessage(channel, message, err => {
                err ? reject(err) : resolve();
            });
        });
    }
}

module.exports = new SlackClient();